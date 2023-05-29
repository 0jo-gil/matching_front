import { useCallback } from "react";

function FormFile({ name, value, label, type, setValue }) {
  const onChangeHandler = useCallback(
    (e) => {
      let fileList = e.target.files;
      console.log(fileList);

      let newFiles = [];
      Array.from(fileList).forEach((file) => newFiles.push(file));

      setValue((prev) => ({
        ...prev,
        [name]: [...newFiles],
      }));
    },
    [value]
  );

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="file"
        name={name}
        value={value}
        onChange={onChangeHandler}
        multiple={type === "single" ? false : true}
      />
      {value && (
        <div>
          <img src={value} />
        </div>
      )}
    </div>
  );
}

export default FormFile;
