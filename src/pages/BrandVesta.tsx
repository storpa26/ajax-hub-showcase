import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BrandVesta() {
  const products = [
    {
      name: "Vesta G1 Alarm Panel",
      price: "$799",
      features: ["64-zone capacity", "4G backup included"],
      image: "Panel",
    },
    {
      name: "Wireless Keypad",
      price: "$129",
      features: ["Proximity tag support", "Backlit display"],
      image: "Keypad",
    },
    {
      name: "Indoor PIR Sensor",
      price: "$79",
      features: ["Pet immune up to 25kg", "12m detection range"],
      image: "PIR",
    },
    {
      name: "Outdoor PIR Camera Sensor",
      price: "$149",
      features: ["Photo verification", "Weatherproof IP65"],
      image: "Camera",
    },
    {
      name: "Signal Repeater",
      price: "$199",
      features: ["Extends wireless range", "Dual-path support"],
      image: "Repeater",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Brand Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-8">
              <div className="inline-block h-24 w-48 bg-muted rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-muted-foreground">VESTA</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Wireless Security at Residential Prices
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vesta offers professional wireless security at residential prices. 64-zone capacity, 4G backup, smartphone control.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Starting from $799 installed
            </Badge>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Vesta Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <span className="text-xl font-semibold text-muted-foreground">
                        {product.image}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>
                      <ul className="space-y-1 mt-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-sm">• {feature}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/quote/vesta">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Build Your Vesta System</h2>
            
            {/* Calculator Mount Point */}
            <div className="border-4 border-dashed border-border rounded-lg p-12 bg-background text-center">
              <div className="text-muted-foreground mb-4">
                <div className="text-lg font-semibold mb-2">Calculator Component Mounts Here</div>
                <p className="text-sm">The interactive product calculator will be integrated at this location</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link to="/quote/vesta">Start Configuration</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
