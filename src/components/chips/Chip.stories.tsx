import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip } from "./Chip";
import { ChipGroup } from "./ChipGroup";

// Chip is a controlled component — it has no expanded/collapsed state of
// its own, so these stories give it somewhere to keep that state (a real
// ChipGroup for the Group story, a tiny local wrapper for the single-chip
// stories) so tapping the chip in Storybook's canvas actually does something.
function ControlledChip({ label }: { label: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Chip
      label={label}
      expanded={expanded}
      onToggle={() => setExpanded((current) => !current)}
    />
  );
}

const meta = {
  title: "Components/Chip",
  component: Chip,
  // Every story below renders via `render`, which ignores these — they
  // only exist to satisfy Chip's required props at the type level.
  args: {
    label: "",
    expanded: false,
    onToggle: () => {},
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  render: () => <ControlledChip label="Freshness Guacamole" />,
};

export const ShortLabel: Story = {
  render: () => <ControlledChip label="Toast" />,
};

export const Group: StoryObj<typeof ChipGroup> = {
  render: () => (
    <ChipGroup
      labels={[
        "Freshness Guacamole",
        "Toast",
        "Grilled Chicken Caesar Salad",
        "Oatmeal",
        "Blueberry Protein Smoothie",
      ]}
    />
  ),
};
