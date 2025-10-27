import { QuoteItem, DeviceSlot } from "@/lib/quoteStorage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PhotoDropzone } from "./PhotoDropzone";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

interface DeviceSlotsProps {
  items: QuoteItem[];
  devicePhotos: Record<string, DeviceSlot[]>;
  onChange: (devicePhotos: Record<string, DeviceSlot[]>) => void;
}

export function DeviceSlots({ items, devicePhotos, onChange }: DeviceSlotsProps) {
  const updateSlot = (sku: string, slotIndex: number, updates: Partial<DeviceSlot>) => {
    const updatedDevices = { ...devicePhotos };
    if (!updatedDevices[sku]) {
      updatedDevices[sku] = [];
    }
    updatedDevices[sku][slotIndex] = { ...updatedDevices[sku][slotIndex], ...updates };
    onChange(updatedDevices);
  };

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const slots = devicePhotos[item.sku] || [];
        
        return (
          <Card key={item.sku}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{item.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {item.qty} {item.qty === 1 ? "location" : "locations"}
                </span>
              </CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Array.from({ length: item.qty }).map((_, index) => {
                const slot = slots[index] || { images: [], notes: "" };
                const isComplete = slot.images.length > 0;

                return (
                  <div key={index} className="p-4 border rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">
                        Location #{index + 1}
                      </h4>
                      {isComplete && (
                        <div className="flex items-center gap-1 text-sm text-green-600">
                          <CheckCircle2 className="h-4 w-4" />
                          Complete
                        </div>
                      )}
                    </div>

                    <PhotoDropzone
                      photos={slot.images}
                      onChange={(images) => updateSlot(item.sku, index, { images })}
                      label={`${item.sku}-${index}`}
                    />

                    <div className="space-y-2">
                      <Label htmlFor={`notes-${item.sku}-${index}`}>
                        Notes for installer (optional)
                      </Label>
                      <Textarea
                        id={`notes-${item.sku}-${index}`}
                        placeholder="e.g., high ceiling, near roller shutter..."
                        value={slot.notes}
                        onChange={(e) => updateSlot(item.sku, index, { notes: e.target.value })}
                      />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
