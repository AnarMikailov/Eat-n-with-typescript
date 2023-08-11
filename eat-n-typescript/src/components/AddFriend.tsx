import React, { useState } from "react";

const AddFriend = ({ setAddFriend, friends, setFriends }) => {
  const [friendName, setFriendName] = useState("");
  const [url, setUrl] = useState("");

  const addNewFriend = () => {
    const newFriend = {
      id: Math.random(),
      name: friendName,
      image: url,
      balance: 120,
    };
    setFriends([...friends, newFriend]);
    setFriendName("");
    setUrl("");
    setAddFriend(false);
  };

  return (
    <div className="">
      <form className="form-add-friend" action="">
        <label htmlFor="">Friend name</label>
        <input
          onChange={(e) => setFriendName(e.target.value)}
          value={friendName}
          type="text"
        />
        <label htmlFor="">Img url</label>
        <input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          type="text"
          name=""
          id=""
        />
        <button onClick={addNewFriend} className="button" type="button">
          Add
        </button>
      </form>
      <button
        onClick={() => setAddFriend(false)}
        className="button"
        type="button"
      >
        Close
      </button>
    </div>
  );
};

export default AddFriend;
