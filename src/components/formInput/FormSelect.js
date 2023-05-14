function FormSelect({ label = undefined, list = [] }) {
  return (
    <div>
      <label>카테고리</label>
      <select>
        <option value={null}>선택</option>
        {list?.map((item, index) => (
          <option value={item?.id}>{item?.categoryName}</option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
