import React, { useState } from "react";

const FormAddUser = ({ list, handleChangeState }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    handleChangeState({ id: list.length + 1, name: name, userName: userName });
  };

  return (
    <div className="add_user">
      <h3>Add new user</h3>
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default FormAddUser;
