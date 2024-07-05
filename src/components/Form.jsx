import { useContext, useState } from "react";
import { EmployeeContext } from "../utils/EmployeeProvider";
import { states } from "../data/states.js";
import { departments } from "../data/departments.js";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import DatePicker from "datepicker-react-lib";

function Form() {
  const { addEmployee } = useContext(EmployeeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    document.querySelector(".modal").style.display = "block";
    addEmployee({
      firstName,
      lastName,
      startDate,
      department,
      dateOfBirth,
      street,
      city,
      state: state.abbreviation,
      zipCode,
    });
  }
  return (
    <>
      <form id="create-employee" method="post" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <InputText
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <InputText
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>
          Date of Birth
          <DatePicker onChange={(value) => setDateOfBirth(value)} />
        </label>

        <label>
          Start Date
          <DatePicker onChange={(value) => setStartDate(value)} />
        </label>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <InputText id="street" onChange={(e) => setStreet(e.target.value)} />
          <label htmlFor="city">Street</label>
          <InputText id="city" onChange={(e) => setCity(e.target.value)} />
          <label>
            State
            <Dropdown
              value={state}
              options={states}
              onChange={(e) => setState(e.value)}
              optionLabel="name"
              placeholder="Select a State"
            />
          </label>
          <label>
            State
            <Dropdown
              value={department}
              options={departments}
              onChange={(e) => setDepartment(e.value)}
              optionLabel="value"
              placeholder="Select a Department"
            />
          </label>
          <label htmlFor="zip-code">Zip Code</label>
          <InputNumber
            id="zip-code"
            onValueChange={(e) => setZipCode(e.value)}
          />
        </fieldset>

        <button className="submit-btn" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default Form;
