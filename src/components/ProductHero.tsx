import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/ajax-hub-2-hero.jpg";

interface ProductHeroProps {
  selectedVariant: "2G" | "4G";
  onVariantChange: (variant: "2G" | "4G") => void;
}

export const ProductHero = ({ selectedVariant, onVariantChange }: ProductHeroProps) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <Badge variant="secondary" className="mb-4 text-sm">
              Wireless Control Panel
            </Badge>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Ajax Hub 2
              </h1>
              
              <div className="flex gap-2">
                <Button
                  variant={selectedVariant === "2G" ? "default" : "outline"}
                  size="sm"
                  onClick={() => onVariantChange("2G")}
                  className="transition-all"
                >
                  2G
                </Button>
                <Button
                  variant={selectedVariant === "4G" ? "default" : "outline"}
                  size="sm"
                  onClick={() => onVariantChange("4G")}
                  className="transition-all"
                >
                  4G
                </Button>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Wireless control panel with photo verification
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-background p-8 shadow-elegant">
              <img 
                src={heroImage} 
                alt="Ajax Hub 2 Wireless Control Panel" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
