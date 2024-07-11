import { useState, createContext } from "react";

export const EmployeeContext = createContext(); // initialisation du contexte pour les employés

function EmployeeProvider({ children }) {
  // création de la variable des employés dans un state
  const [employees, setEmployees] = useState([]);

  // fonction d'ajout d'un employé
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
