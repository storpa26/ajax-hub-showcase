import { useCallback, useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PhotoItem {
  id: string;
  dataUrl: string;
  label?: string;
  notes?: string;
}

interface PhotoDropzoneProps {
  photos: PhotoItem[];
  onChange: (photos: PhotoItem[]) => void;
  multiple?: boolean;
  label?: string;
}

export function PhotoDropzone({ photos, onChange, multiple = true, label }: PhotoDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;

      const fileArray = Array.from(files);
      const imageFiles = fileArray.filter((file) => file.type.startsWith("image/"));

      imageFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result as string;
          const newPhoto: PhotoItem = {
            id: `${Date.now()}-${Math.random()}`,
            dataUrl,
            label: file.name,
            notes: "",
          };
          onChange(multiple ? [...photos, newPhoto] : [newPhoto]);
        };
        reader.readAsDataURL(file);
      });
    },
    [photos, onChange, multiple]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const removePhoto = useCallback(
    (id: string) => {
      onChange(photos.filter((p) => p.id !== id));
    },
    [photos, onChange]
  );

  const updatePhotoNotes = useCallback(
    (id: string, notes: string) => {
      onChange(photos.map((p) => (p.id === id ? { ...p, notes } : p)));
    },
    [photos, onChange]
  );

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-secondary rounded-full">
            <Upload className="h-8 w-8 text-secondary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium">Drag and drop images here</p>
            <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
          </div>
          <Input
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
            id={`file-input-${label || "default"}`}
            capture="environment"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById(`file-input-${label || "default"}`)?.click()}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Choose Files
          </Button>
        </div>
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="border rounded-lg p-3 space-y-2">
              <div className="relative aspect-video bg-muted rounded overflow-hidden">
                <img src={photo.dataUrl} alt={photo.label} className="w-full h-full object-cover" />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => removePhoto(photo.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Input
                placeholder="Caption (optional)"
                value={photo.label || ""}
                onChange={(e) => onChange(photos.map((p) => (p.id === photo.id ? { ...p, label: e.target.value } : p)))}
                className="text-sm"
              />
              <Textarea
                placeholder="Notes (optional)"
                value={photo.notes || ""}
                onChange={(e) => updatePhotoNotes(photo.id, e.target.value)}
                className="text-sm min-h-[60px]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
