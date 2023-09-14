import React, { useContext } from "react";
import { ModeContext } from "../../Context/ModeContext";
import { UsersContext } from "../../Context/UsersContext";

import "./delete.sass";

export default function Delete({ selectedUser, setSelectedUser }) {
  const { txtColor, elemColor } = useContext(ModeContext);
  const { deleteUser } = useContext(UsersContext);

  const textColor = txtColor ? "#fff" : "#313131";
  const elementColor = elemColor ? "#595959" : "#ccc";

  const handleDeleteClick = () => {
    if (selectedUser) {
      deleteUser(selectedUser);
      setSelectedUser(null);
    }
  };

  return (
    <button
      className="delete-user__button button"
      style={{ background: elementColor, color: textColor }}
      onClick={handleDeleteClick}
    >
      Delete
    </button>
  );
}
