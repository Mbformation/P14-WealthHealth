import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { EmployeeContext } from "../utils/EmployeeProvider";
import { FilterMatchMode } from "primereact/api";

function Employees() {
  const { employees } = useContext(EmployeeContext);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };
  const header = (
    <div style={{ textAlign: "left" }}>
      <i className="pi pi-search" style={{ margin: "4px 4px 0 0" }}></i>
      <InputText
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
      <h1>Employees</h1>
      <DataTable
        value={employees}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
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
    </div>
  );
}

export default Employees;
