const API_BASE = "https://cheapalarms.com.au";

export interface UploadStartResponse {
  token: string;
  message: string;
}

export interface UploadImageResponse {
  success: boolean;
  fileId: string;
  url: string;
  message: string;
}

export interface PhotoMapping {
  itemKey?: string;
  itemName?: string;
  urls: string[];
}

export interface ApplyPhotosResponse {
  success: boolean;
  message: string;
  estimateUrl?: string;
}

/**
 * Start an upload session and get a token
 */
export async function startUploadSession(
  estimateId: string,
  locationId: string
): Promise<string> {
  const url = `${API_BASE}/wp-json/ca/v1/upload/start`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estimateId,
      locationId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to start upload session: ${response.statusText}`);
  }

  const data: UploadStartResponse = await response.json();
  return data.token;
}

/**
 * Upload a single image file
 */
export async function uploadImage(
  file: File,
  token: string,
  label?: string
): Promise<UploadImageResponse> {
  const url = `${API_BASE}/wp-json/ca/v1/upload`;
  
  const formData = new FormData();
  formData.append("file", file);
  formData.append("token", token);
  if (label) {
    formData.append("label", label);
  }

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Convert base64 data URL to File object
 */
export function dataUrlToFile(dataUrl: string, filename: string): File {
  const arr = dataUrl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

/**
 * Map uploaded photos to estimate items
 */
export async function mapPhotosToEstimate(
  estimateId: string,
  locationId: string,
  token: string,
  photoMappings: PhotoMapping[]
): Promise<void> {
  const url = `${API_BASE}/wp-json/ca/v1/estimate/photos`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estimateId,
      locationId,
      token,
      uploads: photoMappings,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to map photos: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Apply photos to the estimate in GHL
 */
export async function applyPhotosToEstimate(
  estimateId: string,
  locationId: string,
  token: string
): Promise<ApplyPhotosResponse> {
  const url = `${API_BASE}/wp-json/ca/v1/estimate/apply-photos`;
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      estimateId,
      locationId,
      token,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to apply photos: ${response.statusText}`);
  }

  return response.json();
}
