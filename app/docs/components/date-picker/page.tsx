import { CodeBlock } from "@/components/docs/code-block";

export default function DatePickerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Date Picker</h1>
        <p className="text-lg text-muted-foreground">
          Calendar date selection with single date and date range support.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code="pnpm add @rouf-dev/pantheon-ui react-day-picker" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        
        <h3 className="text-lg font-semibold">Single Date</h3>
        <CodeBlock
          code={`import { DatePicker } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

const [date, setDate] = useState<Date>();

<DatePicker
  date={date}
  onDateChange={setDate}
  placeholder="Pick a date"
  clearable
/>`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6">Date Range</h3>
        <CodeBlock
          code={`import { DateRangePicker } from "@rouf-dev/pantheon-ui";
import { useState } from "react";

const [dateRange, setDateRange] = useState<{
  from?: Date;
  to?: Date;
}>();

<DateRangePicker
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
  placeholder="Pick a date range"
  clearable
/>`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-6">With Date Limits</h3>
        <CodeBlock
          code={`<DatePicker
  date={date}
  onDateChange={setDate}
  fromDate={new Date()}
  toDate={addDays(new Date(), 30)}
  placeholder="Next 30 days only"
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Single date or date range selection</li>
          <li>Custom date format with date-fns</li>
          <li>Min/max date restrictions with <code>fromDate</code> and <code>toDate</code></li>
          <li>Clearable dates with <code>clearable</code> prop</li>
          <li>Disabled dates support</li>
          <li>Fully accessible with keyboard navigation</li>
        </ul>
      </div>
    </div>
  );
}
