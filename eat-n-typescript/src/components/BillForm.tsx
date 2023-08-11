import React, { useState } from "react";

const BillForm = ({ name, id, splitHandler, selected, setSelected }) => {
  const [billValue, setBillValue] = useState("");
  const [myValue, setMyValue] = useState(0);

  const friendsBill = Number(billValue) - myValue;
  const myBill = Number(billValue) - friendsBill;
  // console.log(friendsBill);
  // console.log(selected == "You");
  // console.log(selected);
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
        <input onChange={(e) => setMyValue(e.target.value)} type="number" />
        <label>{name} expense</label>
        <input value={friendsBill} disabled type="text" />
        <label>Who is payin the bill</label>
        <select onChange={(e) => setSelected(e.target.value)} name="" id="">
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
