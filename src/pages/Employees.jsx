import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { EmployeeContext } from "../utils/EmployeeProvider";
import { FilterMatchMode } from "primereact/api";
import { mockEmployees } from "../data/mockEmployees"; // données moquées pour le test de performance

// page employés avec le datatable de la librairie primereact
function Employees() {
  const { employees } = useContext(EmployeeContext);
  // actualisation de filters passé en props dans le datatable
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  // fonction d'actualisation du filtrage à l'input de recherche
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };
  // input de recherche globale dans le datatable
  const header = (
    <div style={{ textAlign: "left" }}>
      <i className="pi pi-search" style={{ margin: "4px 4px 0 0" }}></i>
      <InputText
        className="datatable-filter"
        type="search"
        onInput={(e) => onGlobalFilterChange(e)}
        placeholder="Recherche globale"
      />
    </div>
  );

  return (
    <div className="employees-wrapper">
      <header>
        <NavBar />
      </header>
      <h1>Current Employees</h1>
      <DataTable
        className="datatable"
        value={employees}
        paginator
        rows={10}
        rowsPerPageOptions={[10, 20, 50, 100]}
        tableStyle={{ minWidth: "50rem" }}
        header={header}
        filters={filters}
      >
        <Column sortable field="firstName" header="First Name"></Column>
        <Column sortable field="lastName" header="Last Name"></Column>
        <Column sortable field="dateOfBirth" header="Date Of Birth"></Column>
        <Column sortable field="startDate" header="Start Date"></Column>
        <Column sortable field="department" header="Department"></Column>
        <Column sortable field="street" header="Street"></Column>
        <Column sortable field="city" header="City"></Column>
        <Column sortable field="state" header="State"></Column>
        <Column sortable field="zipCode" header="Zip Code"></Column>
      </DataTable>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Employees;
