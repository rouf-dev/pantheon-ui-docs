import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  data: PropDefinition[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-4">Props</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono text-sm">
                {prop.name}
                {prop.required && (
                  <span className="text-destructive ml-1">*</span>
                )}
              </TableCell>
              <TableCell className="font-mono text-sm text-muted-foreground">
                {prop.type}
              </TableCell>
              <TableCell className="font-mono text-sm">
                {prop.default || "-"}
              </TableCell>
              <TableCell>{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
