import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Mail, ExternalLink, Phone } from "lucide-react";

export default function Booking() {
  const timeline = [
    { label: "We're reviewing your photos", active: true },
    { label: "Final quote preparation", active: false },
    { label: "Installation booking", active: false },
  ];

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Email",
      description: "Confirmation sent to your@email.com",
    },
    {
      icon: ExternalLink,
      title: "Access Portal",
      description: "View your quote details",
      link: "/portal",
    },
    {
      icon: Phone,
      title: "Need Changes",
      description: "Contact us at 1300 XXX XXX",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Success Hero */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-scale-in">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Quote Submitted Successfully!
            </h1>
            <div className="space-y-2">
              <div className="text-lg font-mono bg-muted px-4 py-2 rounded-md inline-block">
                Quote ID: #CA-20241106-001
              </div>
              <p className="text-sm text-muted-foreground">
                Submitted on 6 Nov 2024, 2:30 PM
              </p>
            </div>
          </div>

          {/* Status Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Quote Status</CardTitle>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                  Under Review
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* Timeline */}
              <div className="space-y-4 mb-6">
                {timeline.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.active
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.active ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <span className="text-sm">{index + 1}</span>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        step.active ? "font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <p className="text-sm font-medium">
                  Estimated response: <span className="text-primary">Within 24 hours</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What's Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                  <CardHeader>
                    <step.icon className="h-8 w-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                    {step.link && (
                      <Button asChild className="mt-4" variant="outline">
                        <Link to={step.link}>Go to Portal</Link>
                      </Button>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/portal">View Portal</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
