import { QuoteItem } from "@/lib/quoteStorage";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ItemsTableProps {
  items: QuoteItem[];
}

export function ItemsTable({ items }: ItemsTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-center">Qty</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.sku}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="text-center">{item.qty}</TableCell>
              <TableCell className="text-muted-foreground">{item.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
