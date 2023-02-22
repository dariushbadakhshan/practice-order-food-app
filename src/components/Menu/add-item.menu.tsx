import { FC, FormEvent, useRef, useState } from "react";

import Input from "../../UI/input";

type props = {
  onAddToCard: (amount: number) => void;
};

const AddItem: FC<props> = ({ onAddToCard }) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);

  const amountInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInput.current?.value;

    const enteredAmountNumber = Number(enteredAmount);

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCard(enteredAmountNumber);
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
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    </div>
  );
};
export default AddItem;
