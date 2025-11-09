import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Upload, Calendar, Shield, DollarSign, Award, Star, Phone, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Index() {
  const steps = [
    {
      icon: Calculator,
      title: "Configure Your System",
      description: "Interactive calculator",
    },
    {
      icon: Upload,
      title: "Submit Site Photos",
      description: "Photo upload for accurate pricing",
    },
    {
      icon: Calendar,
      title: "Book Installation",
      description: "Choose date, pay 50% deposit",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "No Sales Commission",
      description: "Direct pricing saves you 30%",
    },
    {
      icon: Award,
      title: "Australian Standards",
      description: "All products meet AS/NZS requirements",
    },
    {
      icon: Shield,
      title: "Fixed Pricing",
      description: "What you see is what you pay",
    },
  ];

  const brands = [
    {
      name: "Vesta",
      available: true,
      href: "/brands/vesta",
    },
    {
      name: "Dahua",
      available: false,
    },
    {
      name: "Uniview",
      available: false,
    },
    {
      name: "TP-Link",
      available: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      suburb: "Parramatta",
      rating: 5,
      text: "Super easy process. Got my quote in minutes and the installation was flawless. No pushy salespeople!",
    },
    {
      name: "James K.",
      suburb: "Liverpool",
      rating: 5,
      text: "Best price I found anywhere. The photo upload made it so accurate - no surprise costs on install day.",
    },
    {
      name: "Linda T.",
      suburb: "Penrith",
      rating: 5,
      text: "Installed my Vesta system in 3 hours. Clean, professional job. Love the app control!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Professional Security Systems
              <span className="block text-primary mt-2">Installed from $799</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Get your quote in 3 minutes. No sales calls. No hidden fees.
            </p>
            <Button size="lg" asChild className="animate-scale-in">
              <Link to="/quote/vesta">Get Instant Quote</Link>
            </Button>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center hover-scale transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CheapAlarms */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why CheapAlarms</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                  <CardHeader>
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Brands */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <Card
                  key={index}
                  className={`relative hover-scale transition-all ${
                    brand.available ? "hover:shadow-lg cursor-pointer" : "opacity-60"
                  }`}
                >
                  {!brand.available && (
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      Coming Soon
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="h-32 bg-muted rounded-md mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">
                        {brand.name}
                      </span>
                    </div>
                    {brand.available ? (
                      <Button asChild variant="outline" className="w-full">
                        <Link to={brand.href}>View Products</Link>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic mb-4">
                      "{testimonial.text}"
                    </CardDescription>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.suburb}</div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Teaser */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you choose the perfect security system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold">1300 XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-semibold">quotes@cheapalarms.com.au</span>
              </div>
            </div>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
