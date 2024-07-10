// composant de type texte dans le formulaire
function InputText({ label, id = "input-text", onChange }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} onChange={onChange} />
    </div>
  );
}

export default InputText;
