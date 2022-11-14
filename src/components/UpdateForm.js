import React, { useState } from "react";

const UpdateForm = ({ updateObjectInArray, user }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    updateObjectInArray(user, {
      id: user,
      name: name,
      userName: userName,
    });
  };

  return (
    <div className="add_user">
      <h3>add new user</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <div>
            {" "}
            <input
              placeholder="Name"
              type="text"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="UserName"
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
