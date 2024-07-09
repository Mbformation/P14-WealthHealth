import { useContext, useState } from "react";
import { EmployeeContext } from "../../utils/EmployeeProvider.jsx";
import { states } from "../../data/states.js";
import { departments } from "../../data/departments.js";
import { InputText } from "primereact/inputtext";
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
    document.querySelector("body").style.overflow = "hidden";

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
  function addTestEmployees() {
    for (let i = 0; i < 1000; i++) {
      addEmployee({
        firstName: "firstName" + i,
        lastName: "lastName" + i,
        dateOfBirth: "11/11/1999" + i,
        startDate: "11/11/1998" + i,
        department: "department" + i,
        street: "street" + i,
        city: "city" + i,
        state: "state" + i,
        zipCode: "64000" + i,
      });
    }
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
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id="date-of-birth"
          onChange={(value) => setDateOfBirth(value)}
        />
        <label htmlFor="start-date">Start Date</label>
        <DatePicker onChange={(value) => setStartDate(value)} id="start-date" />
        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <InputText id="street" onChange={(e) => setStreet(e.target.value)} />
          <label htmlFor="city">City</label>
          <InputText id="city" onChange={(e) => setCity(e.target.value)} />
          <label htmlFor="state">State</label>
          <Dropdown
            id="state"
            value={state}
            options={states}
            onChange={(e) => setState(e.value)}
            optionLabel="name"
            placeholder="Select a State"
          />
          <label htmlFor="department">Department</label>
          <Dropdown
            id="department"
            value={department}
            options={departments}
            onChange={(e) => setDepartment(e.value)}
            optionLabel="value"
            placeholder="Select a Department"
          />
          <label htmlFor="zip-code">Zip Code</label>
          <InputText
            id="zip-code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>
        <button className="submit-btn" type="submit">
          Save
        </button>
      </form>
      <button onClick={addTestEmployees}>Add Test Employees</button>
    </>
  );
}

export default Form;
