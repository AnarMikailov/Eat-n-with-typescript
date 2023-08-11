import { useState } from "react";
import AddFriend from "./AddFriend";
import FriendItem from "./FriendItem";
import { InitialValueProps } from "../types";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const FriendContainer = () => {
  const [addFriend, setAddFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<InitialValueProps[]>(initialFriends);

  return (
    <>
      <div>
        {friends.map((item) => (
          <FriendItem
            name={item.name}
            img={item.image}
            balance={item.balance}
            key={item.id}
            id={item.id}
          />
        ))}

        {addFriend ? (
          <AddFriend
            setAddFriend={setAddFriend}
            friends={friends}
            setFriends={setFriends}
          />
        ) : (
          <button onClick={() => setAddFriend(true)} className="button">
            Add friend
          </button>
        )}
      </div>
    </>
  );
};

export default FriendContainer;
