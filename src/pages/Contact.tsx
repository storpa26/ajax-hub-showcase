import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Shield, Lock } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Mon-Fri: 8am-6pm",
      secondary: "Sat: 9am-3pm",
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "1300 XXX XXX",
      secondary: "Click to call",
      link: "tel:1300XXXXXX",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "quotes@cheapalarms.com.au",
      secondary: "Response within 24hrs",
      link: "mailto:quotes@cheapalarms.com.au",
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "123 Main St",
      secondary: "Sydney NSW",
    },
  ];

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within 3-4 hours. This includes mounting the panel, sensors, keypads, and testing the entire system. We'll provide a more accurate timeframe after reviewing your site photos.",
    },
    {
      question: "Do you service my area?",
      answer: "We currently service all of Sydney metropolitan area, including Parramatta, Liverpool, Penrith, and surrounding suburbs. Contact us to confirm service availability in your specific location.",
    },
    {
      question: "What's included in the price?",
      answer: "Our quoted price includes all equipment, professional installation, system configuration, and 12 months warranty. The only ongoing cost is optional monitoring services, which start from $25/month.",
    },
    {
      question: "Can I install it myself?",
      answer: "While our systems are designed for professional installation to ensure optimal performance and compliance, we can provide DIY kits for experienced installers. Note that professional installation is required to maintain full warranty coverage.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for quotes, support, or questions
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <method.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{method.title}</CardTitle>
                          {method.link ? (
                            <a
                              href={method.link}
                              className="text-base font-semibold text-primary hover:underline"
                            >
                              {method.primary}
                            </a>
                          ) : (
                            <p className="text-base font-semibold">{method.primary}</p>
                          )}
                          <CardDescription>{method.secondary}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right - Lead Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Quote Request</h2>
              <Card>
                <CardHeader>
                  <CardDescription className="text-base">
                    Get response within 1 business day
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Form Mount Placeholder */}
                  <div className="border-4 border-dashed border-border rounded-lg p-12 bg-muted/20 text-center mb-6">
                    <div className="text-muted-foreground">
                      <div className="text-lg font-semibold mb-2">LeadForm Component Mounts Here</div>
                      <p className="text-sm">Contact form will be integrated at this location</p>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      No obligation
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      Secure
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Privacy compliant
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
