import React from "react";
import { SFormWrap, SInputLabel, STextArea } from "./style";

const FormTextArea = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  condition = false,
}) => {
  return (
    <SFormWrap>
      {label && <SInputLabel>{label}</SInputLabel>}
      <STextArea name={name} value={value} placeholder={placeholder} />
    </SFormWrap>
  );
};

export default FormTextArea;
