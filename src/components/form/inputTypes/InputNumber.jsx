// composant de type nombre dans le formulaire
function InputNumber({ label, id = "input-number", onChange }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} onChange={onChange} />
    </div>
  );
}

export default InputNumber;
