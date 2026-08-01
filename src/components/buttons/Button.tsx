import "./Button.css";

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

export function Button({
  label,
  disabled = false,
}: ButtonProps) {
  return (
    <button className="button" disabled={disabled}>
      {label}
    </button>
  );
}