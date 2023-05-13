import { useCallback } from "react";

function FormFile({ name, value, label, type, onChange }) {
  const onChangeHandler = useCallback(
    (e) => {
      let fileList = e.target.files;

      let result = Object.values(fileList)?.map((file) => {
        onChange((prev) => ({
          ...prev,
          [name]: file,
        }));
      });
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
