import { CodeBlock } from "@/components/docs/code-block";

export default function DataTablePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Data Table</h1>
        <p className="text-lg text-muted-foreground">
          Advanced table with sorting, filtering, and pagination using TanStack Table.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui @tanstack/react-table" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        
        <h3 className="text-lg font-semibold">Basic Table</h3>
        <CodeBlock
          code={`import { DataTable, DataTableColumnHeader } from "@rouf-dev/pantheon-ui";
import type { DataTableColumn } from "@rouf-dev/pantheon-ui";

type User = {
  name: string;
  email: string;
  status: string;
};

const columns: DataTableColumn<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Status" },
];

const data: User[] = [
  { name: "John Doe", email: "john@example.com", status: "Active" },
  { name: "Jane Smith", email: "jane@example.com", status: "Pending" },
];

<DataTable columns={columns} data={data} />`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6">With Advanced Features</h3>
        <CodeBlock
          code={`<DataTable
  columns={columns}
  data={data}
  searchable
  searchPlaceholder="Search users..."
  paginated
  pageSize={10}
  pageSizeOptions={[10, 20, 50]}
  selectable
  onSelectionChange={(selection) => console.log(selection)}
  exportable
  exportFilename="users"
  densityControl
  stickyHeader
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Global search with <code>searchable</code></li>
          <li>Pagination with customizable page sizes</li>
          <li>Row selection with bulk actions via <code>selectable</code></li>
          <li>Expandable rows with <code>expandable</code> and <code>renderExpandedRow</code></li>
          <li>Density control (compact/comfortable/spacious)</li>
          <li>Sticky columns and headers</li>
          <li>CSV export with <code>exportable</code></li>
          <li>Column visibility toggle</li>
          <li>Sortable columns with <code>DataTableColumnHeader</code></li>
        </ul>
      </div>
    </div>
  );
}
