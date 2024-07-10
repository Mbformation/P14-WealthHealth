import { useContext, useState } from "react";
import { EmployeeContext } from "../../utils/EmployeeProvider.jsx"; // contexte des employés
import { states } from "../../data/states.js"; // liste des données d'Etats americains
import { departments } from "../../data/departments.js"; // liste des departements
import InputText from "./inputTypes/InputText..jsx";
import InputNumber from "./inputTypes/InputNumber.jsx";
import InputDate from "./inputTypes/InputDate.jsx";
import InputSelect from "./inputTypes/InputSelect.jsx";

// composant de formulaire
function Form() {
  const { addEmployee } = useContext(EmployeeContext); // on récupère la fonction addEmployee du context EmployeeContext
  // initialisation des valeurs des champs du formulaire et de leur state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  // fonction de soumission du formulaire
  function handleSubmit(e) {
    e.preventDefault();
    document.querySelector(".modal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    // on ajoute l'employé à la liste des employés dans EmployeeContext
    addEmployee({
      firstName,
      lastName,
      startDate,
      department,
      dateOfBirth,
      street,
      city,
      state,
      zipCode,
    });
  }

  // on affiche le formulaire avec les inputs, le bouton de soumission
  return (
    <div className="form-wrapper">
      <div className="form-content">
        <h2>Create Employee</h2>
        <form id="create-employee" method="post" onSubmit={handleSubmit}>
          <InputText
            label="First Name"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputText
            label="Last Name"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor=""></label>

          <InputDate
            label="Date of Birth"
            id="date-of-birth"
            onChange={(value) => setDateOfBirth(value)}
          />
          <InputDate
            label="Start Date"
            id="start-date"
            onChange={(value) => setStartDate(value)}
          />
          <fieldset className="address">
            <legend>Address</legend>
            <InputText
              label="Street"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
            />
            <InputText
              label="City"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <InputSelect
              label="State"
              id="state"
              onChange={(e) => setState(e.value)}
              options={states}
              placeholder="Select a State"
            />
            <InputNumber
              label="Zip Code"
              id="zip-code"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>
          <InputSelect
            label="Department"
            id="department"
            onChange={(e) => setDepartment(e.value)}
            options={departments}
            placeholder="Select a Department"
          />
          <button className="submit-btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
