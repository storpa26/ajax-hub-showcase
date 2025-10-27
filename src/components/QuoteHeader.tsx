import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

interface QuoteHeaderProps {
  quoteId: string;
  status?: string;
  showPhotoButton?: boolean;
}

export function QuoteHeader({ quoteId, status = "Awaiting Photos", showPhotoButton = true }: QuoteHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-card border-b sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">CheapAlarms</h1>
              <p className="text-sm text-muted-foreground mt-1">Your Quote — {quoteId}</p>
            </div>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              {status}
            </Badge>
          </div>
          {showPhotoButton && (
            <Button 
              onClick={() => navigate(`/upload?quoteId=${quoteId}`)}
              className="bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              <Camera className="mr-2 h-4 w-4" />
              Provide Site Photos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
