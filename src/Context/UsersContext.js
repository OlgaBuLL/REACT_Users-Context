import React, { createContext, useState, useEffect } from "react";
import {
  saveUsersToLocalStorage,
  getUsersFromLocalStorage,
} from "../Utils/LocalStorageUtils";

export const UsersContext = createContext();

export const UsersList = (props) => {
  const initialUsers = getUsersFromLocalStorage();

  const exampleUsers = [
    {
      id: new Date(),
      userName: "Mary Thompson",
      age: 32,
      subscription: "Subscribed",
      employment: true,
    },
    {
      id: new Date(),
      userName: "Frodo Beggins",
      age: 18,
      subscription: "Not Subscribed",
      employment: true,
    },
    {
      id: new Date(),
      userName: "Stefan Salvatore",
      age: 146,
      subscription: "Other",
      employment: false,
    },
    {
      id: new Date(),
      userName: "Kobe Bryant",
      age: 41,
      subscription: "Not Subscribed",
      employment: false,
    },
    {
      id: new Date(),
      userName: "Anna Karenina",
      age: 28,
      subscription: "Other",
      employment: true,
    },
  ];

  const [users, setUsers] = useState(
    initialUsers.length > 0 ? initialUsers : exampleUsers
  );

  useEffect(() => {
    saveUsersToLocalStorage(users);
  }, [users]);

  const deleteUser = (userToDelete) => {
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
    setUsers(updatedUsers);
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        deleteUser,
        addUser,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
