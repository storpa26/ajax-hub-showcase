import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle2, Image } from "lucide-react";

interface ProgressChipsProps {
  totalPhotos: number;
  completedSlots: number;
  totalSlots: number;
  generalPhotos: number;
}

export function ProgressChips({ totalPhotos, completedSlots, totalSlots, generalPhotos }: ProgressChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="secondary" className="text-sm px-3 py-1">
        <Camera className="mr-2 h-4 w-4" />
        {totalPhotos} Total Photos
      </Badge>
      <Badge variant="secondary" className="text-sm px-3 py-1">
        <Image className="mr-2 h-4 w-4" />
        {generalPhotos} Site Photos
      </Badge>
      <Badge variant="secondary" className="text-sm px-3 py-1">
        <CheckCircle2 className="mr-2 h-4 w-4" />
        {completedSlots} / {totalSlots} Locations
      </Badge>
    </div>
  );
}
