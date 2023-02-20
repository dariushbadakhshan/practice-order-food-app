import { FormEvent, useRef, FC } from "react";
import Input from "../../UI/Input";

const AddItem = () => {
  const amountInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredAmount = amountInput.current?.value;
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInput}
          label="amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    </div>
  );
};
export default AddItem;
