import { useRadioInput } from "@mongez/react-form";
import "./input.scss";

export default function RadioInput({
  value,
  children,
  id, // Receive id as a prop
}: {
  value: any;
  children: React.ReactNode;
  id?: string;
}) {
  const { isSelected, changeValue } = useRadioInput(value);
  const inputId = id || value;
  return (
    <>
      <input
        type="radio"
        id={inputId}
        checked={isSelected}
        onChange={changeValue}
      />
      <label htmlFor={inputId}>{children}</label>
    </>
  );
}
