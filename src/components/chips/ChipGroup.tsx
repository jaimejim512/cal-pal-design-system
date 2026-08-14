import { useState } from "react";
import { Chip } from "./Chip";
import "./ChipGroup.css";

type ChipGroupProps = {
  labels: string[];
};

export function ChipGroup({ labels }: ChipGroupProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="chip-group">
      {labels.map((label, index) => (
        <Chip
          key={index}
          label={label}
          expanded={index === expandedIndex}
          onToggle={() =>
            setExpandedIndex((current) => (current === index ? null : index))
          }
        />
      ))}
    </div>
  );
}
