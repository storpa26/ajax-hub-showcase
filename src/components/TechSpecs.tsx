import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TechSpecsProps {
  selectedVariant: "2G" | "4G";
}

export const TechSpecs = ({ selectedVariant }: TechSpecsProps) => {
  const specs = [
    {
      category: "Radio Protocols",
      value: "Jeweller (868 MHz), Wings (868 MHz for cameras)",
    },
    {
      category: "Jeweller Range",
      value: "Up to 2000 m (open space)",
    },
    {
      category: "Wings Range",
      value: "Up to 1700 m (open space)",
    },
    {
      category: "Polling Interval",
      value: "12-300 seconds (adjustable)",
    },
    {
      category: "Encryption",
      value: "AES-128 (Jeweller), AES-256 (Wings)",
    },
    {
      category: "Connectivity",
      value: selectedVariant === "4G" 
        ? "4G LTE, 3G WCDMA, 2G GSM, Ethernet" 
        : "2G GSM, Ethernet",
    },
    {
      category: "Power Supply",
      value: "230 V / 12 V DC adapter (included)",
    },
    {
      category: "Backup Battery",
      value: "Up to 15 hours",
    },
    {
      category: "Operating Temperature",
      value: "-10°C to +40°C",
    },
    {
      category: "Dimensions",
      value: "163 × 163 × 36 mm",
    },
    {
      category: "Weight",
      value: "253 g",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
        
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Specification</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specs.map((spec, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{spec.category}</TableCell>
                  <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};
