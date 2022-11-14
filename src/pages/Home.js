import React, { useState } from "react";
import FormAddUser from "../components/FormAddUser";

const Home = () => {
  const initdata = [];

  const [userList, setUserList] = useState(initdata);

  const handleChangeState = infoUser => {
    setUserList(userList => [...userList, infoUser]);
  };

  const handleDelete = id => {
    const newUserList = userList.filter(item => item.id !== id);
    setUserList(newUserList);
  };

  const handleUpdate = id => {
    console.log("ok");
  };

  return (
    <>
      <FormAddUser list={userList} handleChangeState={handleChangeState} />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((res, i) => {
              return (
                <tr key={i}>
                  <td>{res.name}</td>
                  <td>{res.userName}</td>
                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => handleUpdate(res.id)}
                    >
                      edit
                    </button>
                    <button
                      className="btn btn-light"
                      onClick={() => handleDelete(res.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
