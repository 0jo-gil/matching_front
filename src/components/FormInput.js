import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user/atoms/userState";
import axios from "axios";

function FormInput({ name, value, label }) {
  const [userValue, setUserValue] = useRecoilState(userState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = () => {
    const response = axios
      .post("http://localhost:8080/api/v1/member/signup", {
        ...userValue,
      })
      .then((res) => console.log(res));
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

      <button onClick={onSubmitHandler}>제출</button>
    </>
  );
}

export default FormInput;
