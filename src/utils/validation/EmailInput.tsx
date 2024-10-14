import {
  emailRule,
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import "./input.scss";

export default function EmailInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, emailRule],
    ...props,
  });
  const getErrorMessage = () => {
    if (!error) return null;

    switch (error) {
      case "validation.required":
        return "this input is required";
      case "validation.email":
        return "invalid email address";
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
