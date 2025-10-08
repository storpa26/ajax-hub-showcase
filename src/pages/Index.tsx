import { useState } from "react";
import { ProductHero } from "@/components/ProductHero";
import { CalloutsGrid } from "@/components/CalloutsGrid";
import { SpecsModule } from "@/components/SpecsModule";
import { CompatibilityGallery, type CompatibleDevice } from "@/components/CompatibilityGallery";
import { CapacityOverview } from "@/components/CapacityOverview";
import { AddonsCarousel } from "@/components/AddonsCarousel";

import { TechSpecs } from "@/components/TechSpecs";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState<"2G" | "4G">("4G");
  const [capacity, setCapacity] = useState({
    devices: 0,
    sirens: 0,
    groups: 0,
    cameras: 0,
    users: 0,
    scenarios: 0,
  });
  
  const { toast } = useToast();

  const handleAddDevice = (device: CompatibleDevice) => {
    const newCapacity = { ...capacity };
    
    // Check limits before adding
    if (device.category === "sensor" || device.category === "keypad" || device.category === "extender") {
      if (newCapacity.devices >= 100) {
        toast({
          title: "Cannot add device",
          description: "Device limit reached (100 max).",
          variant: "destructive",
        });
        return;
      }
      newCapacity.devices += 1;
    } else if (device.category === "siren") {
      if (newCapacity.devices >= 100) {
        toast({
          title: "Cannot add device",
          description: "Device limit reached (100 max).",
          variant: "destructive",
        });
        return;
      }
      if (newCapacity.sirens >= 10) {
        toast({
          title: "Cannot add siren",
          description: "Siren limit reached (10 max).",
          variant: "destructive",
        });
        return;
      }
      newCapacity.devices += 1;
      newCapacity.sirens += 1;
    } else if (device.category === "camera") {
      if (newCapacity.cameras >= 25) {
        toast({
          title: "Cannot add camera",
          description: "Camera limit reached (25 max).",
          variant: "destructive",
        });
        return;
      }
      newCapacity.cameras += 1;
    }
    
    setCapacity(newCapacity);
    
    toast({
      title: "Device added",
      description: `${device.name} added to your build.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ProductHero 
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
      />
      
      <CalloutsGrid />
      
      <SpecsModule selectedVariant={selectedVariant} />
      
      <CompatibilityGallery onAddDevice={handleAddDevice} />
      
      <CapacityOverview capacity={capacity} />
      
      <AddonsCarousel />
      
      <TechSpecs selectedVariant={selectedVariant} />
    </div>
  );
};

export default Index;
