import React, { useState } from "react";

const UpdateForm = ({ updateObjectInArray, user }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    updateObjectInArray(user.id, {
      id: user.id,
      name: name,
      userName: userName,
    });
  };

  return (
    <div className="add_user">
      <h3>Update user</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <div>
            {" "}
            <input
              placeholder={user.name}
              type="text"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder={user.userName}
              type="text"
              onChange={e => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
