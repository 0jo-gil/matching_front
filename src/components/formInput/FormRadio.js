import React from "react";
import { SDescText, SInputRadio, SRadioLabel, SFormWrap } from "./style";
import { SFlexBox } from "@styled/common";

const FormRadio = ({
  desc = null,
  label = undefined,
  name = "",
  list = [],
}) => {
  return (
    <SFormWrap>
      {desc && <SDescText>{desc}</SDescText>}
      <SFlexBox>
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
      </SFlexBox>
    </SFormWrap>
  );
};

export default FormRadio;
