import {
  FormControlProps,
  matchRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import "./input.scss";

export default function PasswordInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, minLengthRule, matchRule],
    ...props,
  });
  const getErrorMessage = () => {
    if (!error) return null;

    switch (error) {
      case "validation.required":
        return "this input is required";
      case "validation.minLength":
        return "Value can not be lower than 8";
      case "validation.match":
        return "Password must match";
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
