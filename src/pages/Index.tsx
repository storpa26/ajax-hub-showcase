import { useState } from "react";
import { ProductHero } from "@/components/ProductHero";
import { CalloutsGrid } from "@/components/CalloutsGrid";
import { SpecsModule } from "@/components/SpecsModule";
import { CompatibilityGallery, type CompatibleDevice } from "@/components/CompatibilityGallery";
import { CapacityOverview } from "@/components/CapacityOverview";
import { AddonsCarousel } from "@/components/AddonsCarousel";
import { PricingCard } from "@/components/PricingCard";
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
    
    // Increment based on device category
    if (device.category === "sensor" || device.category === "keypad" || device.category === "extender") {
      newCapacity.devices += 1;
    } else if (device.category === "siren") {
      newCapacity.devices += 1;
      newCapacity.sirens += 1;
    } else if (device.category === "camera") {
      newCapacity.cameras += 1;
    }
    
    setCapacity(newCapacity);
    
    // Show validation if over capacity
    if (newCapacity.devices > 100) {
      toast({
        title: "Over capacity",
        description: "Device limit exceeded (100 max). Consider removing items.",
        variant: "destructive",
      });
    } else if (newCapacity.sirens > 10) {
      toast({
        title: "Over capacity",
        description: "Siren limit exceeded (10 max). Consider removing items.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Device added",
        description: `${device.name} added to your build.`,
      });
    }
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
      
      <PricingCard 
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
      />
      
      <TechSpecs selectedVariant={selectedVariant} />
    </div>
  );
};

export default Index;
