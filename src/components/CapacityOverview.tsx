import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";

interface CapacityData {
  devices: number;
  sirens: number;
  groups: number;
  cameras: number;
  users: number;
  scenarios: number;
}

interface CapacityOverviewProps {
  capacity: CapacityData;
}

const limits = {
  devices: 100,
  sirens: 10,
  groups: 9,
  cameras: 25,
  users: 50,
  scenarios: 32,
};

export const CapacityOverview = ({ capacity }: CapacityOverviewProps) => {
  const getProgressColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return "bg-capacity-high";
    if (percentage >= 70) return "bg-capacity-medium";
    return "bg-capacity-low";
  };

  const isOverCapacity = (current: number, max: number) => current > max;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">System Capacity</h2>
        
        <Card className="p-6">
          <div className="space-y-6">
            {/* Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Devices</span>
                  <span className="text-sm text-muted-foreground">
                    {capacity.devices} / {limits.devices}
                  </span>
                </div>
                <Progress 
                  value={(capacity.devices / limits.devices) * 100} 
                  className={isOverCapacity(capacity.devices, limits.devices) ? "border-destructive border-2" : ""}
                />
                {isOverCapacity(capacity.devices, limits.devices) && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Over capacity limit
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Sirens</span>
                  <span className="text-sm text-muted-foreground">
                    {capacity.sirens} / {limits.sirens}
                  </span>
                </div>
                <Progress 
                  value={(capacity.sirens / limits.sirens) * 100}
                  className={isOverCapacity(capacity.sirens, limits.sirens) ? "border-destructive border-2" : ""}
                />
                {isOverCapacity(capacity.sirens, limits.sirens) && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Over capacity limit
                  </p>
                )}
              </div>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Groups</p>
                <p className="text-lg font-semibold">
                  {capacity.groups} / {limits.groups}
                </p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Cameras</p>
                <p className="text-lg font-semibold">
                  {capacity.cameras} / {limits.cameras}
                </p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Users</p>
                <p className="text-lg font-semibold">
                  {capacity.users} / {limits.users}
                </p>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Scenarios</p>
                <p className="text-lg font-semibold">
                  {capacity.scenarios} / {limits.scenarios}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
