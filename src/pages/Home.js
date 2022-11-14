import React, { useState } from "react";
import FormAddUser from "../components/FormAddUser";
import UpdateForm from "../components/UpdateForm";

const Home = () => {
  const initdata = [];

  const [userList, setUserList] = useState(initdata);
  const [UserUpdate, setUserUpdate] = useState(false);
  const [userId, setUserId] = useState(0);

  const handleChangeState = infoUser => {
    setUserList(userList => [...userList, infoUser]);
    setUserUpdate(false);
  };

  const handleDelete = id => {
    const newUserList = userList.filter(item => item.id !== id);
    setUserList(newUserList);
  };

  const handleUpdate = id => {
    setUserId(id);
    setUserUpdate(true);
  };

  const updateObjectInArray = (id, infoUser) => {
    setUserList(userList =>
      userList.map(obj => {
        if (obj.id === id) {
          console.log("ok");
          return {
            ...obj,
            id: id,
            name: infoUser.name,
            userName: infoUser.userName,
          };
        }
        return obj;
      })
    );
    setUserUpdate(false);
  };

  console.log(userList);

  return (
    <div className="home_container">
      {UserUpdate ? (
        <UpdateForm updateObjectInArray={updateObjectInArray} user={userId} />
      ) : (
        <FormAddUser list={userList} handleChangeState={handleChangeState} />
      )}
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
    </div>
  );
};

export default Home;
