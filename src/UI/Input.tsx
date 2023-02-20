import { forwardRef } from "react";

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
    <div>
      <label htmlFor={input.id}>{label} </label>
      <input ref={ref} id={input.id} {...input} />
    </div>
  );
});
export default Input;
