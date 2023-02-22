import { forwardRef } from "react";
import InputStyle from "./input.style";

type props = {
  input: {
    id?: string;
    type?: string;
    min?: string;
    max?: string;
    step?: string;
    defaultValue?: string;
  };
  label: string;
};

type ref = HTMLInputElement;

const Input = forwardRef<ref, props>(({ input, label }, ref) => {
  return (
    <InputStyle>
      <label htmlFor={input.id}>{label} </label>
      <input ref={ref} id={input.id} {...input} />
    </InputStyle>
  );
});
export default Input;
