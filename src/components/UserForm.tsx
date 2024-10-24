import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../redux/userSlice";
import { RootState } from "../redux/store";
import "./UserForm.css";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.user.name);
  const [name, setName] = useState(userName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUserName(name));
    alert(`User name is set to: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label htmlFor="name">User Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Set Name</button>
    </form>
  );
};

export default UserForm;
