import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  selectedVariant: "2G" | "4G";
  onVariantChange: (variant: "2G" | "4G") => void;
}

const pricing = {
  "2G": {
    price: "£349",
    features: [
      "2G connectivity",
      "Dual SIM support",
      "Ethernet connection",
      "Up to 100 devices",
      "Photo verification",
      "2-year warranty",
    ],
  },
  "4G": {
    price: "£449",
    features: [
      "4G LTE + 3G + 2G",
      "Dual SIM support",
      "Ethernet connection",
      "Up to 100 devices",
      "Photo verification",
      "2-year warranty",
    ],
  },
};

export const PricingCard = ({ selectedVariant, onVariantChange }: PricingCardProps) => {
  const currentPricing = pricing[selectedVariant];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <Button
                  variant={selectedVariant === "2G" ? "default" : "outline"}
                  onClick={() => onVariantChange("2G")}
                  className="flex-1"
                >
                  2G Version
                </Button>
                <Button
                  variant={selectedVariant === "4G" ? "default" : "outline"}
                  onClick={() => onVariantChange("4G")}
                  className="flex-1"
                >
                  4G Version
                </Button>
              </div>

              <div className="text-center py-6">
                <p className="text-5xl font-bold text-foreground mb-2">
                  {currentPricing.price}
                </p>
                <p className="text-sm text-muted-foreground">One-time purchase</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {currentPricing.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Add to Quote
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Talk to an installer
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
