import { useLayoutEffect, useRef, useState } from "react";
import "./Chip.css";

type ChipProps = {
  label: string;
  expanded: boolean;
  onToggle: () => void;
};

export function Chip({ label, expanded, onToggle }: ChipProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [expandedWidth, setExpandedWidth] = useState<number | null>(null);

  // CSS can't transition to an "auto"/content-sized width, so measure the
  // pixel width the button would need to show the full label, and animate
  // to that instead. useLayoutEffect (not useEffect) so this is measured
  // and applied before the browser paints — no flash of the wrong width.
  useLayoutEffect(() => {
    const buttonEl = buttonRef.current;
    const labelEl = labelRef.current;
    if (!buttonEl || !labelEl) return;

    const style = getComputedStyle(buttonEl);
    const horizontalExtras =
      parseFloat(style.paddingLeft) +
      parseFloat(style.paddingRight) +
      parseFloat(style.borderLeftWidth) +
      parseFloat(style.borderRightWidth);

    setExpandedWidth(labelEl.scrollWidth + horizontalExtras);
  }, [label]);

  return (
    <button
      ref={buttonRef}
      type="button"
      className="chip"
      aria-expanded={expanded}
      onClick={onToggle}
      style={
        expanded && expandedWidth !== null
          ? { width: expandedWidth }
          : undefined
      }
    >
      <span ref={labelRef} className="chip-label">
        {label}
      </span>
    </button>
  );
}
