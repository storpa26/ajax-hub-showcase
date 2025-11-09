import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, Lightbulb } from "lucide-react";

export default function QuoteVesta() {
  const lineItems = [
    { name: "Vesta G1 Panel", qty: 1, price: 799 },
    { name: "Indoor PIR", qty: 4, price: 316 },
    { name: "Keypad", qty: 1, price: 129 },
  ];

  const subtotal = lineItems.reduce((sum, item) => sum + item.price, 0);
  const installation = 299;
  const total = subtotal + installation;

  const nextSteps = [
    "Submit your details",
    "Upload site photos",
    "Get your final quote",
    "Book installation",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/brands/vesta" className="hover:text-primary">Vesta</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Quote</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Configure Your Vesta System</h1>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Calculator */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Product Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-4 border-dashed border-border rounded-lg p-12 bg-muted/20 text-center">
                    <div className="text-muted-foreground">
                      <div className="text-lg font-semibold mb-2">Calculator Mounts Here</div>
                      <p className="text-sm">Interactive product selector will be integrated at this location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Quote Summary (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Quote Summary Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Quote</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Line Items */}
                    <div className="space-y-3">
                      {lineItems.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {item.name} × {item.qty}
                          </span>
                          <span className="font-medium">${item.price}</span>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Subtotal */}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal}</span>
                    </div>

                    {/* Installation */}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Installation</span>
                      <span className="font-medium">${installation}</span>
                    </div>

                    <Separator />

                    {/* Total */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary">${total}</span>
                    </div>

                    {/* Info Banner */}
                    <Alert>
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        Photo submission will refine pricing
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Next Steps Panel */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {nextSteps.map((step, index) => (
                        <li key={index} className="flex gap-3 text-sm">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xs">
                            {index + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                    <Button className="w-full mt-6" asChild>
                      <Link to="/review">Continue to Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Lead Form Section */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Quote</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">🔒</span>
                  <span>Your information is secure</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border-4 border-dashed border-border rounded-lg p-12 bg-muted/20 text-center">
                  <div className="text-muted-foreground">
                    <div className="text-lg font-semibold mb-2">LeadForm Component Mounts Here</div>
                    <p className="text-sm">Customer details form will be integrated at this location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
