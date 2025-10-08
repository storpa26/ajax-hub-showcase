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

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Cameras</span>
                  <span className="text-sm text-muted-foreground">
                    {capacity.cameras} / {limits.cameras}
                  </span>
                </div>
                <Progress 
                  value={(capacity.cameras / limits.cameras) * 100}
                  className={isOverCapacity(capacity.cameras, limits.cameras) ? "border-destructive border-2" : ""}
                />
                {isOverCapacity(capacity.cameras, limits.cameras) && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Over capacity limit
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Users</span>
                  <span className="text-sm text-muted-foreground">
                    {capacity.users} / {limits.users}
                  </span>
                </div>
                <Progress 
                  value={(capacity.users / limits.users) * 100}
                  className={isOverCapacity(capacity.users, limits.users) ? "border-destructive border-2" : ""}
                />
                {isOverCapacity(capacity.users, limits.users) && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Over capacity limit
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Scenarios</span>
                  <span className="text-sm text-muted-foreground">
                    {capacity.scenarios} / {limits.scenarios}
                  </span>
                </div>
                <Progress 
                  value={(capacity.scenarios / limits.scenarios) * 100}
                  className={isOverCapacity(capacity.scenarios, limits.scenarios) ? "border-destructive border-2" : ""}
                />
                {isOverCapacity(capacity.scenarios, limits.scenarios) && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Over capacity limit
                  </p>
                )}
              </div>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-1 gap-4 pt-4 border-t">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Groups</span>
                  <span className="text-sm text-muted-foreground">
                    {capacity.groups} / {limits.groups}
                  </span>
                </div>
                <Progress 
                  value={(capacity.groups / limits.groups) * 100}
                  className={isOverCapacity(capacity.groups, limits.groups) ? "border-destructive border-2" : ""}
                />
                {isOverCapacity(capacity.groups, limits.groups) && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Over capacity limit
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
