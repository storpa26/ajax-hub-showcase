import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Speaker, Key, AlertTriangle, Radio as RadioIcon, Video } from "lucide-react";

interface CompatibleDevice {
  id: string;
  name: string;
  description: string;
  icon: any;
  category: "sensor" | "siren" | "keypad" | "camera" | "extender";
}

const devices: CompatibleDevice[] = [
  {
    id: "motioncam",
    name: "MotionCam",
    description: "PIR detector with photo verification",
    icon: Camera,
    category: "sensor",
  },
  {
    id: "motioncam-outdoor",
    name: "MotionCam Outdoor",
    description: "Outdoor PIR with photo capture",
    icon: Camera,
    category: "sensor",
  },
  {
    id: "keypad",
    name: "KeyPad",
    description: "Touchscreen keypad for arming",
    icon: Key,
    category: "keypad",
  },
  {
    id: "homesiren",
    name: "HomeSiren",
    description: "Indoor wireless siren",
    icon: Speaker,
    category: "siren",
  },
  {
    id: "streetsiren",
    name: "StreetSiren",
    description: "Outdoor wireless siren with LED",
    icon: AlertTriangle,
    category: "siren",
  },
  {
    id: "rex",
    name: "ReX Range Extender",
    description: "Extends radio range up to 2x",
    icon: RadioIcon,
    category: "extender",
  },
  {
    id: "nvr",
    name: "Ajax NVR",
    description: "Network video recorder integration",
    icon: Video,
    category: "camera",
  },
];

interface CompatibilityGalleryProps {
  onAddDevice: (device: CompatibleDevice) => void;
}

export const CompatibilityGallery = ({ onAddDevice }: CompatibilityGalleryProps) => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Compatible Ajax Devices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((device) => (
            <Card key={device.id} className="p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <device.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{device.name}</h3>
                  <p className="text-sm text-muted-foreground">{device.description}</p>
                </div>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => onAddDevice(device)}
                className="w-full"
              >
                Add to build
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export type { CompatibleDevice };
