import { SFormWrap, SInputElement, SInputLabel } from "./style";
import React, { useCallback } from "react";
import styled from "styled-components";

function FormInput({
  name,
  value,
  placeholder,
  label,
  setValue,
  condition = false,
}) {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <SFormWrap>
      {label && (
        <SInputLabel htmlFor={name} test={condition}>
          {label}
        </SInputLabel>
      )}
      <SInputElement
        type={name === "password" ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </SFormWrap>
  );
}

export default FormInput;
