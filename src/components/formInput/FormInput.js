import React, { useCallback } from "react";

function FormInput({ name, value, label, onChange }) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    onChange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={name === "password" ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default FormInput;
