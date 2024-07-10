import DatePicker from "datepicker-react-lib";

// composant de type date dans le formulaire
function InputDate({ label, id = "input-date", onChange }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <DatePicker onChange={onChange} id={id} />
    </div>
  );
}

export default InputDate;
