import { useState } from "react";
import BillForm from "./BillForm";
import { FriendItemProps } from "../types";
const FriendItem = ({ name, img, id }: FriendItemProps) => {
  const [openBillForm, setOpenBillForm] = useState(false);
  const [myOwe, setMyowe] = useState<number>(0);
  const [selected, setSelected] = useState("You");

  const [friendOwe, setFriendOwe] = useState(0);
  const splitHandler = (myBill: number, friendsBill: number) => {
    setMyowe(friendsBill);
    setFriendOwe(myBill);
  };
  const selectedYou = selected == "You";
  const selectedfriend = selected == name;

  return (
    <>
      <ul>
        <li>
          <img src={img} alt="img" />
          <h3>{name}</h3>
          {myOwe ? (
            <>
              {selectedYou && (
                <p className="green">
                  {name} owes you {myOwe}
                </p>
              )}
              {selectedfriend && (
                <p className="red">
                  You owes {name} {friendOwe}
                </p>
              )}
            </>
          ) : (
            <p>You and {name} even</p>
          )}
          <button
            onClick={() => setOpenBillForm(!openBillForm)}
            type="button"
            className="button"
          >
            {openBillForm ? "close" : "select"}
          </button>
        </li>
      </ul>
      {openBillForm ? (
        <BillForm
          splitHandler={splitHandler}
          name={name}
          id={id}
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FriendItem;
