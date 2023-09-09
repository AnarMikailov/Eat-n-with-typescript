import { useState } from "react";
import { BillFormProps } from "../types";

const BillForm = ({
  name,
  splitHandler,
  selected,
  setSelected,
  id,
}: BillFormProps) => {
  const [billValue, setBillValue] = useState("");
  const [myValue, setMyValue] = useState("");

  const friendsBill = Number(billValue) - Number(myValue);
  const myBill = Number(billValue) - friendsBill;

  return (
    <div>
      <form className="form-split-bill">
        <h2>Split Bill with {name}</h2>
        <label>Bill value</label>
        <input
          onChange={(e) => setBillValue(e.target.value)}
          value={billValue}
          type="number"
        />
        <label>Your expense</label>
        <input
          onChange={(e) => setMyValue(e.target.value)} // Changed <MouseEvent> to (e)
          value={myValue} // Added a value attribute to this input
          type="number"
        />
        <label>{name} expense</label>
        <input value={friendsBill} disabled type="text" />
        <label>Who is paying the bill</label>
        <select onChange={(e) => setSelected(e.target.value)} value={selected}>
          {/* Added value attribute */}
          <option value="You">You</option>
          <option value={name}>{name}</option>
        </select>
        <button
          onClick={() => splitHandler(myBill, friendsBill)}
          className="button"
          type="button"
        >
          Split bill
        </button>
      </form>
    </div>
  );
};

export default BillForm;
