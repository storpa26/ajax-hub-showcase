import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Upload, X, CheckCircle2 } from "lucide-react";

export default function Review() {
  const [uploadedPhotos] = useState([
    { id: 1, name: "Front Door", color: "bg-blue-200" },
    { id: 2, name: "Living Room", color: "bg-green-200" },
    { id: 3, name: "Electrical Panel", color: "bg-yellow-200" },
    { id: 4, name: "Back Door", color: "bg-purple-200" },
  ]);

  const requirements = [
    { label: "Entry points (doors/windows)", checked: true },
    { label: "Interior spaces", checked: true },
    { label: "Mounting locations", checked: false },
    { label: "Electrical panel", checked: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Step 2 of 3</span>
              <span className="text-sm font-medium text-primary">67% Complete</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>

          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Submit Site Photos</h1>
            <p className="text-lg text-muted-foreground">Help us create an accurate quote</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Upload Zone */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  {/* Drag-Drop Zone */}
                  <div className="border-4 border-dashed border-border rounded-lg p-12 bg-muted/20 text-center hover:bg-muted/30 transition-colors cursor-pointer">
                    <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <div className="text-lg font-semibold mb-2">
                      Drag photos here or click to browse
                    </div>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG up to 10MB
                    </p>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Uploaded Photos ({uploadedPhotos.length})</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {uploadedPhotos.map((photo) => (
                        <div key={photo.id} className="relative group">
                          <div className={`aspect-square rounded-lg ${photo.color} flex items-center justify-center text-sm font-medium p-4 text-center`}>
                            {photo.name}
                          </div>
                          <button
                            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Delete photo"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button variant="outline" className="flex-1">
                      Add More Photos
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link to="/booking">Submit Photos</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right - Requirements Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Photo Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {req.checked ? (
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${req.checked ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {req.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t">
                    <Badge variant="secondary" className="mb-2">
                      💡 Tip
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      More photos = more accurate quote. Include multiple angles of each area.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
