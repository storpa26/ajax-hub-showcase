import { Button } from "@/components/ui/button";
import { Save, Send } from "lucide-react";

interface StickyActionsBarProps {
  onSave: () => void;
  onSubmit: () => void;
  isSaving?: boolean;
  isSubmitting?: boolean;
}

export function StickyActionsBar({ onSave, onSubmit, isSaving, isSubmitting }: StickyActionsBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground hidden sm:block">
            Your progress is saved automatically when you click "Save Progress"
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={onSave}
              disabled={isSaving}
              className="flex-1 sm:flex-none"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Progress"}
            </Button>
            <Button
              onClick={onSubmit}
              disabled={isSubmitting}
              className="flex-1 sm:flex-none bg-primary hover:bg-primary-hover"
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Submitting..." : "Submit Photos"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
