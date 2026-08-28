import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import { Button } from "../buttons/Button";
import { ChipGroup } from "../chips/ChipGroup";

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    // Every story below supplies its own children — this default only
    // exists to satisfy Card's required `children` prop at the type level.
    children: null,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // children doesn't have to be JSX nested between tags — it's just a
    // prop, so it can be passed directly like this too.
    children: "Card content goes here.",
  },
};

// Card has no opinion on how its children are laid out — that's the
// composing developer's job. Here a flex column with a token-based gap
// stacks the heading, chips, and button in the "Add Recent Lunch Meals"
// section of the design.
const stackStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "var(--space-4)",
};

// There's no Heading component yet, so this styles a plain <h2> inline
// using the same type-scale tokens a real one would use later.
const headingStyle = {
  margin: 0,
  color: "var(--color-text-primary)",
  fontFamily: "var(--font-family-base)",
  fontSize: "var(--font-size-xl)",
  fontWeight: "var(--font-weight-semibold)",
};

export const RecentLunchMeals: Story = {
  render: () => (
    <Card>
      <div style={stackStyle}>
        <h2 style={headingStyle}>Add Recent Lunch Meals</h2>
        <ChipGroup
          labels={[
            "Freshness Guacamole",
            "Grilled Chicken Caesar Salad",
            "Toast",
          ]}
        />
        <Button label="Add food" />
      </div>
    </Card>
  ),
};
