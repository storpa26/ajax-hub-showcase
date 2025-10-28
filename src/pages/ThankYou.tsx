import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { QuoteHeader } from "@/components/QuoteHeader";
import { ProgressChips } from "@/components/ProgressChips";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchEstimate, getPhotoStats, QuoteData, saveQuoteData } from "@/lib/quoteStorage";
import { CheckCircle2, Edit, FileText, AlertTriangle } from "lucide-react";

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const estimateId = searchParams.get("estimateId");
  const locationId = searchParams.get("locationId");
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEstimate() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchEstimate(estimateId || undefined, locationId || undefined);
        setQuoteData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load estimate");
      } finally {
        setIsLoading(false);
      }
    }
    loadEstimate();
  }, [estimateId, locationId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-3xl space-y-6">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-64 w-full" />
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

  const stats = getPhotoStats(quoteData);

  return (
    <div className="min-h-screen bg-background">
      <QuoteHeader quoteId={quoteData.quoteId} locationId={locationId || undefined} status="Photos Received" showPhotoButton={false} />

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">Thanks! Your photos have been received.</h1>
            <p className="text-muted-foreground">
              Our team will review your submission and update your quote shortly.
            </p>
          </div>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Submission Summary</CardTitle>
              <CardDescription>Here's what you uploaded</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ProgressChips
                totalPhotos={stats.totalPhotos}
                completedSlots={stats.completedSlots}
                totalSlots={stats.totalSlots}
                generalPhotos={stats.generalPhotos}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <p className="text-3xl font-bold text-primary">{stats.totalPhotos}</p>
                  <p className="text-sm text-muted-foreground">Total Photos</p>
                </div>
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <p className="text-3xl font-bold text-primary">{stats.generalPhotos}</p>
                  <p className="text-sm text-muted-foreground">Site Photos</p>
                </div>
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <p className="text-3xl font-bold text-primary">
                    {stats.completedSlots}/{stats.totalSlots}
                  </p>
                  <p className="text-sm text-muted-foreground">Locations Done</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="outline"
              onClick={() => navigate(`/upload?estimateId=${quoteData.quoteId}${locationId ? `&locationId=${locationId}` : ''}`)}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Review/Edit My Uploads
            </Button>
            <Button
              onClick={() => navigate(`/quote?estimateId=${quoteData.quoteId}${locationId ? `&locationId=${locationId}` : ''}`)}
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover"
            >
              <FileText className="h-4 w-4" />
              Back to Quote
            </Button>
          </div>

          <Alert>
            <AlertDescription className="text-sm text-muted-foreground">
              You'll receive an email when your updated quote is ready for review.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
