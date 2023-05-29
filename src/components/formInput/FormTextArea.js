import React from "react";
import { SFormWrap, SInputLabel, STextArea } from "./style";

const FormTextArea = ({
  name,
  value,
  label,
  placeholder,
  setValue,
  condition = false,
}) => {
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <SFormWrap>
      {label && <SInputLabel>{label}</SInputLabel>}
      <STextArea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </SFormWrap>
  );
};

export default FormTextArea;
