import {
  RadioGroupContext,
  requiredRule,
  useFormControl,
  type FormControlProps,
} from "@mongez/react-form";
import "./input.scss";

type RadioGroupProps = FormControlProps & {
  children: React.ReactNode;
  defaultValue?: any;
};

export default function RadioGroup({
  defaultValue,
  ...props
}: RadioGroupProps) {
  const { value, changeValue } = useFormControl({
    ...props,
    defaultValue,
    rules: [requiredRule],
  });

  return (
    <RadioGroupContext.Provider value={{ value, changeValue }}>
      {props.children}
    </RadioGroupContext.Provider>
  );
}
