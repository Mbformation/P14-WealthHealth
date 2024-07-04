import { states } from "../data/states.js";
import { departments } from "../data/departments.js";
import DatePicker from "datepicker-react-lib";
import { useContext, useState } from "react";
import { EmployeeContext } from "../utils/EmployeeProvider";
import { Dropdown } from "primereact/dropdown";

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
        <label>
          First Name
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>

        <label>
          Last Name
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>
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

          <label>
            Street
            <input type="text" onChange={(e) => setStreet(e.target.value)} />
          </label>

          <label>
            City
            <input type="text" onChange={(e) => setCity(e.target.value)} />
          </label>
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
          <label>
            Zip Code
            <input type="number" onChange={(e) => setZipCode(e.target.value)} />
          </label>
        </fieldset>

        <button className="submit-btn" type="submit">
          Save
        </button>
      </form>
    </>
  );
}

export default Form;
