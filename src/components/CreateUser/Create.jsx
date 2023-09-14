import React, { useState, useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";
import { ModeContext } from "../../Context/ModeContext";
import "./style.sass";

export default function Create() {
  const { txtColor, elemColor } = useContext(ModeContext);
  const { addUser } = useContext(UsersContext);

  const [newUser, setNewUser] = useState({
    id: new Date(),
    userName: "",
    age: "",
    subscription: "Subscribed",
    employment: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setNewUser({ ...newUser, [name]: newValue });
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    if (newUser.userName && newUser.age && newUser.subscription !== "") {
      addUser(newUser);
      console.log(newUser);
      setNewUser({
        id: new Date(),
        userName: "",
        age: "",
        subscription: "Subscribed",
        employment: false,
      });
    }
  };

  const textColor = txtColor ? "#fff" : "#313131";
  const elementColor = elemColor ? "#595959" : "#ccc";

  return (
    <form action="" className="create-user">
      <input
        type="text"
        className={`create-user__input ${
          txtColor ? "input-light" : "input-dark"
        }`}
        placeholder="Name"
        name="userName"
        value={newUser.userName}
        onChange={handleInputChange}
      />
      <input
        type="number"
        min="18"
        className={`create-user__input ${
          txtColor ? "input-light" : "input-dark"
        }`}
        placeholder="Age"
        name="age"
        value={newUser.age}
        onChange={handleInputChange}
      />
      <select
        className={`create-user__select ${
          txtColor ? "select-light" : "select-dark"
        }`}
        name="subscription"
        value={newUser.subscription}
        onChange={handleInputChange}
      >
        <option value="Subscribed">Subscribed</option>
        <option value="Not Subscribed">Not Subscribed</option>
        <option value="Other">Other</option>
      </select>

      <div className="create-user__employed">
        <input
          type="checkbox"
          id="employment"
          className="create-user__checkbox"
          name="employment"
          checked={newUser.employment}
          onChange={handleInputChange}
        />
        <label
          htmlFor="employment"
          className="create-user__label"
          style={{ color: textColor }}
        >
          Employed
        </label>
      </div>

      <button
        className="create-user__button button"
        style={{ background: elementColor, color: textColor }}
        onClick={handleAddUser}
      >
        Insert
      </button>
    </form>
  );
}
