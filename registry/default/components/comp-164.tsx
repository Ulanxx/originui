import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { useId } from "react";

export default function Component() {
  const id = useId();

  const items = [
    { value: "1", label: "2 CPU" },
    { value: "2", label: "4 CPU" },
    { value: "3", label: "6 CPU" },
    { value: "4", label: "8 CPU" },
    { value: "5", label: "12 CPU" },
    { value: "6", label: "16 CPU", disabled: true },
  ];

  return (
    <fieldset className="space-y-4">
      <legend className="text-foreground text-sm leading-none font-medium">CPU Cores</legend>
      <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="1">
        {items.map((item) => (
          <label
            key={`${id}-${item.value}`}
            className="border-input has-data-[state=checked]:border-ring/40 has-data-[state=checked]:bg-accent outline-ring/30 dark:outline-ring/40 relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center shadow-xs outline-offset-2 transition-colors has-focus-visible:outline-2 has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
          >
            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="sr-only after:absolute after:inset-0"
              disabled={item.disabled}
            />
            <p className="text-foreground text-sm leading-none font-medium">{item.label}</p>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}
