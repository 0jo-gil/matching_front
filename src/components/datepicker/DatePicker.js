import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePicker({ name, label = undefined, setValue = {}, value }) {
  const dateFormat = (date) => {
    let selectedDate = new Date(date);
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    let day = selectedDate.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    return `${year}-${month}-${day}`;
  };

  const onChangeDate = (e) => {
    console.log(dateFormat(e));
    setValue((prev) => ({
      ...prev,
      [name]: e,
    }));
  };
  return (
    <div>
      {label !== undefined && <span>{label}</span>}
      <ReactDatePicker
        onChange={onChangeDate}
        selected={value[name]}
        dateFormat={"yyyy년 MM월 dd일"}
      />
    </div>
  );
}

export default DatePicker;
