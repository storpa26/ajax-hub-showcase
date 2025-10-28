import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { QuoteHeader } from "@/components/QuoteHeader";
import { PhotoDropzone } from "@/components/PhotoDropzone";
import { DeviceSlots } from "@/components/DeviceSlots";
import { StickyActionsBar } from "@/components/StickyActionsBar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchEstimate, saveQuoteData, validateSubmission, QuoteData } from "@/lib/quoteStorage";
import { useToast } from "@/hooks/use-toast";
import { Info, CheckCircle2, AlertTriangle } from "lucide-react";

const GENERAL_PHOTO_CHECKLIST = [
  "Front of property",
  "Back/yard",
  "Electrical panel/fuse box",
  "Internet router/NVR location",
  "Cable access points/ceiling void",
];

export default function Upload() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const estimateId = searchParams.get("estimateId");
  const locationId = searchParams.get("locationId");
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadEstimate() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchEstimate(estimateId || undefined, locationId || undefined);
        setQuoteData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load estimate");
        toast({
          title: "Error loading estimate",
          description: "Could not fetch estimate data. Please check your link and try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    loadEstimate();
  }, [estimateId, locationId, toast]);

  const handleSave = () => {
    if (!quoteData) return;
    setIsSaving(true);
    saveQuoteData(quoteData);
    toast({
      title: "Progress saved",
      description: "Your photos and notes have been saved.",
    });
    setTimeout(() => setIsSaving(false), 500);
  };

  const handleSubmit = () => {
    if (!quoteData) return;

    const validation = validateSubmission(quoteData);
    if (!validation.valid) {
      toast({
        title: "Cannot submit",
        description: validation.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const updatedData = { ...quoteData, submitted: true };
    saveQuoteData(updatedData);

    setTimeout(() => {
      toast({
        title: "Photos submitted!",
        description: "Your photos have been sent to our team.",
      });
      navigate(`/thank-you?estimateId=${quoteData.quoteId}${locationId ? `&locationId=${locationId}` : ''}`);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-5xl space-y-6">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </div>
    );
  }

  if (error || !quoteData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Estimate Not Found
            </CardTitle>
            <CardDescription>
              {error || "Could not load estimate data. Please check your link or try again."}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <QuoteHeader quoteId={quoteData.quoteId} locationId={locationId || undefined} showPhotoButton={false} />

      <div className="container mx-auto px-4 py-8 max-w-5xl space-y-6">
        <Alert className="bg-secondary/20 border-secondary">
          <Info className="h-4 w-4 text-secondary-foreground" />
          <AlertDescription>
            <strong>Tip:</strong> You can take photos directly from your phone's camera. Photos help us optimise your quote and installation time.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="general">General Site Photos</TabsTrigger>
            <TabsTrigger value="devices">Device Locations</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>General Site Photos</CardTitle>
                <CardDescription>
                  Upload photos of your property and key areas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <PhotoDropzone
                  photos={quoteData.photos.general}
                  onChange={(photos) => {
                    setQuoteData({
                      ...quoteData,
                      photos: { ...quoteData.photos, general: photos },
                    });
                  }}
                />

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Suggested Photos</h4>
                  <div className="space-y-2">
                    {GENERAL_PHOTO_CHECKLIST.map((item) => {
                      const hasPhoto = quoteData.photos.general.some((p) =>
                        p.label?.toLowerCase().includes(item.toLowerCase().split("/")[0])
                      );
                      return (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2
                            className={`h-4 w-4 ${
                              hasPhoto ? "text-green-600" : "text-muted-foreground"
                            }`}
                          />
                          <span className={hasPhoto ? "line-through text-muted-foreground" : ""}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6 mt-6">
            <DeviceSlots
              items={quoteData.items}
              devicePhotos={quoteData.photos.devices}
              onChange={(devices) => {
                setQuoteData({
                  ...quoteData,
                  photos: { ...quoteData.photos, devices },
                });
              }}
            />
          </TabsContent>
        </Tabs>
      </div>

      <StickyActionsBar
        onSave={handleSave}
        onSubmit={handleSubmit}
        isSaving={isSaving}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
