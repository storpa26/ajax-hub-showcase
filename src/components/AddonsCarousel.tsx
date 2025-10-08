import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Addon {
  id: string;
  name: string;
  description: string;
  image?: string;
}

const addons: Addon[] = [
  {
    id: "backup-battery",
    name: "Extended Backup Battery",
    description: "24-hour backup power supply",
  },
  {
    id: "installation",
    name: "Professional Installation",
    description: "Expert setup and configuration",
  },
  {
    id: "monitoring",
    name: "24/7 Monitoring (12 months)",
    description: "Professional monitoring service",
  },
  {
    id: "warranty",
    name: "Extended Warranty (3 years)",
    description: "Additional coverage and support",
  },
  {
    id: "training",
    name: "User Training Session",
    description: "1-hour personalized training",
  },
];

export const AddonsCarousel = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Available Add-ons</h2>
        
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-4 pb-4">
            {addons.map((addon) => (
              <Card key={addon.id} className="p-5 w-80 flex-shrink-0 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{addon.description}</p>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  View details
                </Button>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
