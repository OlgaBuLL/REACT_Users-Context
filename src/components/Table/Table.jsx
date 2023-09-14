import React, { useContext, useState, useEffect } from "react";
import { ModeContext } from "../../Context/ModeContext";
import { UsersContext } from "../../Context/UsersContext";

import "./style.sass";

export default function Table({ selectedUser, setSelectedUser }) {
  const { txtColor, elemColor } = useContext(ModeContext);
  const { users } = useContext(UsersContext);

  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    // копия исходного массива пользователей
    const usersCopy = [...users];

    // сортировка в зависимости от полей
    if (sortField === "userName") {
      usersCopy.sort(
        (a, b) =>
          a.userName.localeCompare(b.userName) * (sortOrder === "asc" ? 1 : -1)
      );
    } else if (sortField === "age") {
      usersCopy.sort(
        (a, b) => (a.age - b.age) * (sortOrder === "asc" ? 1 : -1)
      );
    } else if (sortField === "subscription") {
      usersCopy.sort(
        (a, b) =>
          a.subscription.localeCompare(b.subscription) *
          (sortOrder === "asc" ? 1 : -1)
      );
    } else if (sortField === "employment") {
      usersCopy.sort(
        (a, b) =>
          a.employment.toString().localeCompare(b.employment.toString()) *
          (sortOrder === "asc" ? 1 : -1)
      );
    }

    // установка отсортированных пользователей в состояние
    setSortedUsers(usersCopy);
  }, [users, sortField, sortOrder]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const getEmploymentStatus = (user) => {
    return user.employment ? "Employed" : "Unemployed";
  };

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const textColor = txtColor ? "#fff" : "#313131";
  const elementColor = elemColor ? "#595959" : "#ccc";

  return (
    <table
      className="table"
      style={{ color: textColor, borderColor: elementColor }}
    >
      <thead>
        <tr style={{ background: elementColor }}>
          <th onClick={() => toggleSort("userName")}>Name</th>
          <th onClick={() => toggleSort("age")}>Age</th>
          <th onClick={() => toggleSort("subscription")}>Subscription</th>
          <th onClick={() => toggleSort("employment")}>Employment</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.length > 0 ? (
          sortedUsers.map((user, i) => (
            <tr
              key={i}
              onClick={() => handleUserClick(user)}
              style={{
                background: selectedUser === user ? "#217346" : "transparent",
                cursor: "pointer",
              }}
            >
              <td>{user.userName}</td>
              <td>{user.age}</td>
              <td>{user.subscription}</td>
              <td>{getEmploymentStatus(user)}</td>
            </tr>
          ))
        ) : (
          <tr colSpan="4">
            <td colSpan="4" style={{ color: "#217346", textAlign: "center" }}>
              Table is empty
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
