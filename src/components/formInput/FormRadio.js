import React from "react";
import styled from "styled-components";
import { SDescText, SFormElementWrap, SInputRadio, SRadioLabel } from "./style";

const FormRadio = ({
  desc = null,
  label = undefined,
  name = "",
  list = [],
}) => {
  return (
    <SFormElementWrap>
      {desc && <SDescText>{desc}</SDescText>}
      {list.length > 0 &&
        list?.map((item, index) => (
          <>
            <SInputRadio
              type="radio"
              name={name}
              id={`${name}-${item.id}`}
            ></SInputRadio>
            <SRadioLabel htmlFor={`${name}-${item.id}`}>
              {item.categoryName}
            </SRadioLabel>
          </>
        ))}
    </SFormElementWrap>
  );
};

export default FormRadio;
