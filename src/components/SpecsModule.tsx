import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SpecsModuleProps {
  selectedVariant: "2G" | "4G";
}

export const SpecsModule = ({ selectedVariant }: SpecsModuleProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Connectivity & Battery</h2>
        
        <Card className="p-6">
          <Tabs defaultValue={selectedVariant} value={selectedVariant}>
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="2G">2G Variant</TabsTrigger>
              <TabsTrigger value="4G">4G Variant</TabsTrigger>
            </TabsList>
            
            <TabsContent value="2G" className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Connectivity</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2G (GSM 850/900/1800/1900 MHz)</li>
                  <li>• Ethernet (10/100 Base-T)</li>
                  <li>• Dual SIM slots for redundancy</li>
                  <li>• Wi-Fi not supported in this variant</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Battery Life</h3>
                <p className="text-muted-foreground">
                  Up to 15 hours on backup battery (typical usage)
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="4G" className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Connectivity</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 4G LTE (multiple bands) and 3G WCDMA fallback</li>
                  <li>• 2G (GSM 850/900/1800/1900 MHz) fallback</li>
                  <li>• Ethernet (10/100 Base-T)</li>
                  <li>• Dual SIM slots for redundancy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Battery Life</h3>
                <p className="text-muted-foreground">
                  Up to 15 hours on backup battery (typical usage)
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
