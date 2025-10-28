export interface QuoteItem {
  sku: string;
  name: string;
  qty: number;
  desc: string;
}

export interface PhotoItem {
  id: string;
  dataUrl: string;
  label?: string;
  notes?: string;
}

export interface DeviceSlot {
  images: PhotoItem[];
  notes: string;
}

export interface QuoteData {
  quoteId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  solution: string;
  items: QuoteItem[];
  photos: {
    general: PhotoItem[];
    devices: Record<string, DeviceSlot[]>;
  };
  submitted: boolean;
}

// API constants
const API_BASE = "https://cheapalarms.com.au";
const TEST_ESTIMATE_ID = "68fddd36a5d4856a0fd07d40";
const TEST_LOCATION_ID = "aLTXtdwNknfmEFo3WBIX";

// Fetch estimate from WordPress API
export async function fetchEstimate(estimateId?: string, locationId?: string): Promise<QuoteData> {
  const finalEstimateId = estimateId || TEST_ESTIMATE_ID;
  const finalLocationId = locationId || TEST_LOCATION_ID;
  
  const url = `${API_BASE}/wp-json/ca/v1/estimate?estimateId=${finalEstimateId}&locationId=${finalLocationId}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch estimate: ${response.statusText}`);
  }
  
  const data = await response.json();
  
  // Transform API response to QuoteData format
  const items: QuoteItem[] = (data.items || []).map((item: any, index: number) => ({
    sku: `ITEM-${index + 1}`,
    name: item.name || "Unnamed Item",
    qty: item.qty || item.quantity || 1,
    desc: item.description || "",
  }));
  
  // Initialize empty photo slots for each item
  const devices: Record<string, DeviceSlot[]> = {};
  items.forEach((item) => {
    devices[item.sku] = Array.from({ length: item.qty }, () => ({
      images: [],
      notes: "",
    }));
  });
  
  // Try to load saved photos from localStorage
  const savedData = localStorage.getItem(`cheapalarms:quote:${finalEstimateId}`);
  const savedPhotos = savedData ? JSON.parse(savedData).photos : null;
  
  return {
    quoteId: data.estimateId || finalEstimateId,
    customer: {
      name: data.contact?.name || data.contact?.email?.split("@")[0] || "Customer",
      email: data.contact?.email || "",
      phone: data.contact?.phone || "",
      address: data.contact?.address || "",
    },
    solution: data.title || "Estimate",
    items,
    photos: savedPhotos || {
      general: [],
      devices,
    },
    submitted: false,
  };
}

const STORAGE_KEY_PREFIX = "cheapalarms:quote:";

const defaultQuoteData: QuoteData = {
  quoteId: "QA-1001",
  customer: {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "0400 000 000",
    address: "123 Example Street, Sydney NSW 2000",
  },
  solution: "Alarm + CCTV",
  items: [
    { sku: "AJAX-HUB2-4G", name: "Ajax Hub 2 (4G)", qty: 1, desc: "Wireless alarm hub" },
    { sku: "AJAX-MD", name: "Motion Detector", qty: 3, desc: "PIR motion sensor" },
    { sku: "AJAX-DOOR", name: "Door/Window Contact", qty: 4, desc: "Magnetic reed switch" },
    { sku: "HK-4MP-DOME", name: "Hikvision 4MP Dome Camera", qty: 2, desc: "PoE dome camera" },
  ],
  photos: {
    general: [],
    devices: {
      "AJAX-HUB2-4G": [{ images: [], notes: "" }],
      "AJAX-MD": [
        { images: [], notes: "" },
        { images: [], notes: "" },
        { images: [], notes: "" },
      ],
      "AJAX-DOOR": [
        { images: [], notes: "" },
        { images: [], notes: "" },
        { images: [], notes: "" },
        { images: [], notes: "" },
      ],
      "HK-4MP-DOME": [
        { images: [], notes: "" },
        { images: [], notes: "" },
      ],
    },
  },
  submitted: false,
};

export function getQuoteData(quoteId: string): QuoteData {
  const key = STORAGE_KEY_PREFIX + quoteId;
  const stored = localStorage.getItem(key);
  
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Initialize with default data
  const data = { ...defaultQuoteData, quoteId };
  saveQuoteData(data);
  return data;
}

export function saveQuoteData(data: QuoteData): void {
  const key = STORAGE_KEY_PREFIX + data.quoteId;
  localStorage.setItem(key, JSON.stringify(data));
}

export function getPhotoStats(data: QuoteData): {
  totalPhotos: number;
  generalPhotos: number;
  devicePhotos: number;
  completedSlots: number;
  totalSlots: number;
} {
  const generalPhotos = data.photos.general.length;
  let devicePhotos = 0;
  let completedSlots = 0;
  let totalSlots = 0;

  Object.values(data.photos.devices).forEach((slots) => {
    slots.forEach((slot) => {
      totalSlots++;
      const slotPhotoCount = slot.images.length;
      devicePhotos += slotPhotoCount;
      if (slotPhotoCount > 0) {
        completedSlots++;
      }
    });
  });

  return {
    totalPhotos: generalPhotos + devicePhotos,
    generalPhotos,
    devicePhotos,
    completedSlots,
    totalSlots,
  };
}

export function validateSubmission(data: QuoteData): { valid: boolean; message: string } {
  const stats = getPhotoStats(data);

  if (stats.generalPhotos === 0) {
    return {
      valid: false,
      message: "Please add at least 1 general site photo before submitting.",
    };
  }

  const minDeviceSlots = Math.ceil(stats.totalSlots * 0.5);
  if (stats.completedSlots < minDeviceSlots) {
    return {
      valid: false,
      message: `Please complete at least ${minDeviceSlots} device location slots (currently ${stats.completedSlots} completed).`,
    };
  }

  return { valid: true, message: "" };
}
