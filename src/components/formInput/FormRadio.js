import React from "react";
import { SDescText, SInputRadio, SRadioLabel, SFormWrap } from "./style";
import { SFlexBox } from "@styled/common";

const FormRadio = ({
  desc = null,
  label = undefined,
  name = "",
  list = [],
  setValue,
}) => {
  const onChangeHandler = (e, id) => {
    setValue((prev) => ({
      ...prev,
      [name]: id,
    }));
  };
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
                onChange={(e) => onChangeHandler(e, item.id)}
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
