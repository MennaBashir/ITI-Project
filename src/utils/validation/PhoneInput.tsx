import "./input.scss";
import {
  requiredRule,
  useFormControl,
  FormControlProps,
  patternRule,
} from "@mongez/react-form";
export default function PhoneInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, patternRule],
    ...props,
  });
  const getErrorMessage = () => {
    if (!error) return null;

    switch (error) {
      case "validation.required":
        return "this input is required";
      case "validation.pattern":
        return "invalid Phone Number";
      default:
        return "this input is required";
    }
  };
  return (
    <>
      <input
        value={value}
        id={id}
        onChange={(e) => {
          changeValue(e.target.value);
        }}
        {...otherProps}
        className={`input ${error ? "errorInput" : ""}`}
      />
      {error && <p className="error">{getErrorMessage()}</p>}
    </>
  );
}
