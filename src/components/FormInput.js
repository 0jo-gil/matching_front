import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user/atoms/userState";

function FormInput({ name, value, label, onChange }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    onChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={name === "password" ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
}

export default FormInput;
