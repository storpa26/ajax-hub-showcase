import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lock, Download, Calendar, Image } from "lucide-react";

export default function Portal() {
  const lineItems = [
    { name: "Vesta G1 Panel", qty: 1 },
    { name: "Indoor PIR", qty: 4 },
    { name: "Keypad", qty: 1 },
  ];

  const photos = [
    { id: 1, name: "Front Door", color: "bg-blue-200" },
    { id: 2, name: "Living Room", color: "bg-green-200" },
    { id: 3, name: "Electrical Panel", color: "bg-yellow-200" },
    { id: 4, name: "Back Door", color: "bg-purple-200" },
    { id: 5, name: "Hallway", color: "bg-pink-200" },
    { id: 6, name: "Kitchen", color: "bg-orange-200" },
  ];

  const documents = [
    { name: "Quote #001.pdf", icon: Download },
    { name: "Installation Guide.pdf", icon: Download },
    { name: "Terms & Conditions.pdf", icon: Download },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Banner */}
          <Alert className="mb-8">
            <Lock className="h-4 w-4" />
            <AlertDescription>
              🔒 Secure portal - Full access after booking confirmation
            </AlertDescription>
          </Alert>

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-8">Your Quote Portal</h1>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Quote Summary Panel */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Your Quote</CardTitle>
                  <Badge variant="outline" className="font-mono text-xs">
                    #CA-001
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Line Items */}
                <div className="space-y-2">
                  {lineItems.map((item, index) => (
                    <div key={index} className="text-sm flex justify-between">
                      <span className="text-muted-foreground">
                        {item.name} × {item.qty}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold text-primary">$1,543</span>
                </div>

                <Badge variant="secondary" className="w-full justify-center">
                  Awaiting approval
                </Badge>

                <Button variant="outline" className="w-full" disabled>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            {/* Photos Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Submitted Photos</span>
                  <Badge variant="secondary">{photos.length} photos</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className={`aspect-square rounded-md ${photo.color} flex items-center justify-center p-2`}
                    >
                      <Image className="h-6 w-6 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/review">Add more</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Booking Info Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Installation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                  <Badge variant="secondary" className="mb-2">Not scheduled</Badge>
                  <p className="text-sm text-muted-foreground">
                    Available after quote approval
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documents Section */}
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border bg-muted/20"
                  >
                    <span className="text-sm font-medium flex-1">{doc.name}</span>
                    <Button size="icon" variant="ghost" disabled>
                      <doc.icon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
