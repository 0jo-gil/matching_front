import { SFlexBox } from "@styled/common";
import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

function DatePicker({
  label = undefined,
  setValue = {},
  value,
  type = "single",
}) {
  const dateFormat = (date) => {
    let selectedDate = new Date(date);
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    let day = selectedDate.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
  };

  const onChangeDate = (e, name) => {
    setValue((prev) => ({
      ...prev,
      [name]: e,
    }));
  };

  return (
    <SDatePickerWrap>
      {label !== undefined && <span>{label}</span>}
      <SFlexBox>
        <ReactDatePicker
          name="startedAt"
          onChange={(e) => onChangeDate(e, "startedAt")}
          selected={value["startedAt"]}
          dateFormat={"yyyy년 MM월 dd일"}
        />
        ~
        {type === "dual" && (
          <ReactDatePicker
            name="endedAt"
            onChange={(e) => onChangeDate(e, "endedAt")}
            selected={value["endedAt"]}
            dateFormat={"yyyy년 MM월 dd일"}
          />
        )}
      </SFlexBox>
    </SDatePickerWrap>
  );
}

export default DatePicker;

const SDatePickerWrap = styled.div`
  .react-datepicker-wrapper {
    flex: 1 1 0;
  }
`;
