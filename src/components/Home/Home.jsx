import React, { useContext, useState } from "react";
import { ModeContext } from "../../Context/ModeContext";
import { UsersList } from "../../Context/UsersContext";

import Create from "../CreateUser/Create";
import Mode from "../Mode/Mode";
import Delete from "../DeleteUser/Delete";
import Table from "../Table/Table";

import "./style.sass";

export default function Home() {
  const { txtColor, bgColor, elemColor } = useContext(ModeContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const textColor = txtColor ? "#fff" : "#313131";
  const backgroundColor = bgColor ? "#313131" : "#fff";
  const elementColor = elemColor ? "#595959" : "#ccc";

  return (
    <UsersList>
      <div className="home" style={{ background: backgroundColor }}>
        <fieldset
          className="left-wrapper"
          style={{ borderColor: elementColor }}
        >
          <legend style={{ color: textColor }}> Insert Row</legend>

          <Create />
          <hr style={{ background: elementColor }} />
          <Mode />
          <Delete
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </fieldset>

        <div
          className={`right-wrapper ${
            elemColor ? "scrollbar-dark" : "scrollbar-light"
          }`}
        >
          <Table
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
      </div>
    </UsersList>
  );
}
