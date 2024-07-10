import Select from "react-select";
// composant de type select dans le formulaire
function InputSelect({
  label,
  id = "input-select",
  options,
  onChange,
  placeholder,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <Select
        id={id}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputSelect;
