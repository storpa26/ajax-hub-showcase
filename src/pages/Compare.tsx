import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, X } from "lucide-react";

export default function Compare() {
  const brands = [
    { name: "Vesta", available: true },
    { name: "Dahua", available: false },
    { name: "Uniview", available: false },
    { name: "TP-Link", available: false },
  ];

  const features = [
    {
      name: "System Type",
      values: ["Wireless", "Wired/Wireless", "Wired/Wireless", "Wireless"],
    },
    {
      name: "Starting Price",
      values: ["$799", "$899", "$849", "$699"],
    },
    {
      name: "App Control",
      values: [true, true, true, true],
    },
    {
      name: "Professional Installation",
      values: [true, true, true, false],
    },
    {
      name: "Best For",
      values: [
        "Residential",
        "Commercial",
        "Multi-site",
        "DIY Install",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Compare Systems</h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect security system for your needs
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-4 text-left font-semibold">Feature</th>
                      {brands.map((brand, index) => (
                        <th key={index} className="p-4 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <span className="font-semibold">{brand.name}</span>
                            {!brand.available && (
                              <Badge variant="secondary" className="text-xs">
                                Coming Soon
                              </Badge>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, rowIndex) => (
                      <tr key={rowIndex} className="border-b last:border-b-0">
                        <td className="p-4 font-medium">{feature.name}</td>
                        {feature.values.map((value, colIndex) => (
                          <td key={colIndex} className="p-4 text-center">
                            {typeof value === "boolean" ? (
                              value ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )
                            ) : (
                              <span className="text-sm">{value}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="bg-muted/20">
                      <td className="p-4 font-semibold">Get Quote</td>
                      {brands.map((brand, index) => (
                        <td key={index} className="p-4 text-center">
                          {brand.available ? (
                            <Button asChild size="sm">
                              <Link to={`/quote/${brand.name.toLowerCase()}`}>
                                Get Quote
                              </Link>
                            </Button>
                          ) : (
                            <Button size="sm" disabled>
                              Coming Soon
                            </Button>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-4">
            {brands.map((brand, brandIndex) => (
              <Card key={brandIndex}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{brand.name}</CardTitle>
                    {!brand.available && (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex justify-between items-center pb-2 border-b last:border-b-0"
                    >
                      <span className="text-sm font-medium text-muted-foreground">
                        {feature.name}
                      </span>
                      <span className="text-sm font-semibold">
                        {typeof feature.values[brandIndex] === "boolean" ? (
                          feature.values[brandIndex] ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )
                        ) : (
                          feature.values[brandIndex]
                        )}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2">
                    {brand.available ? (
                      <Button asChild className="w-full">
                        <Link to={`/quote/${brand.name.toLowerCase()}`}>
                          Get Quote
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
