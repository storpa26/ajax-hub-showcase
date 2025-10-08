import { Card } from "@/components/ui/card";
import { Wifi, Camera, Radio, Users, Video, UserCircle, Zap, Bell } from "lucide-react";

const callouts = [
  { icon: Wifi, text: "Dual SIM + Ethernet" },
  { icon: Camera, text: "Photo verification (MotionCam)" },
  { icon: Radio, text: "Up to 100 devices" },
  { icon: Users, text: "Up to 9 groups" },
  { icon: Video, text: "Up to 25 cameras" },
  { icon: UserCircle, text: "Up to 50 users" },
  { icon: Zap, text: "Up to 32 scenarios" },
  { icon: Bell, text: "Up to 10 sirens" },
];

export const CalloutsGrid = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {callouts.map((callout, index) => (
            <Card key={index} className="p-5 flex flex-col items-start gap-3 hover:shadow-md transition-shadow">
              <callout.icon className="w-6 h-6 text-primary" />
              <p className="text-sm font-medium text-foreground leading-tight">
                {callout.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
