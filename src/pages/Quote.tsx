import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QuoteHeader } from "@/components/QuoteHeader";
import { ItemsTable } from "@/components/ItemsTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { getQuoteData, QuoteData } from "@/lib/quoteStorage";
import { ChevronDown, Info } from "lucide-react";

export default function Quote() {
  const [searchParams] = useSearchParams();
  const quoteId = searchParams.get("quoteId") || "QA-1001";
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  useEffect(() => {
    const data = getQuoteData(quoteId);
    setQuoteData(data);
  }, [quoteId]);

  if (!quoteData) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <QuoteHeader quoteId={quoteData.quoteId} />

      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        {/* Customer Info */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{quoteData.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{quoteData.customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{quoteData.customer.phone}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Solution Type</p>
                <p className="font-medium">{quoteData.solution}</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">Site Address</p>
              <p className="font-medium">{quoteData.customer.address}</p>
            </div>
          </CardContent>
        </Card>

        {/* Items */}
        <Card>
          <CardHeader>
            <CardTitle>Quote Items</CardTitle>
            <CardDescription>Your selected security equipment</CardDescription>
          </CardHeader>
          <CardContent>
            <ItemsTable items={quoteData.items} />
          </CardContent>
        </Card>

        {/* Photo Request CTA */}
        <Alert className="bg-primary/5 border-primary">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-foreground">
            <strong>Next Step:</strong> We need photos of your site to refine your quote. Click "Provide Site Photos" above to help us optimise your installation and pricing.
          </AlertDescription>
        </Alert>

        {/* What Photos Needed */}
        <Card>
          <CardHeader>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <CardTitle className="text-lg">What photos do I need?</CardTitle>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Front of property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Back of property / yard area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Electrical panel / fuse box</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Internet router / NVR location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Each device location (where sensors/cameras will be mounted)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Any cable access points or ceiling voids</span>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </CardHeader>
        </Card>

        {/* Footer Note */}
        <Alert>
          <AlertDescription className="text-sm text-muted-foreground">
            No prices are shown here. Final quote will be reviewed by our team after photos are received.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
