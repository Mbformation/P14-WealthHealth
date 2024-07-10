import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import "./styles.css";
import { PrimeReactProvider } from "primereact/api"; // bilbliotheque de composants react pour le datatable
import "primereact/resources/themes/lara-light-cyan/theme.css";
import EmployeeProvider from "./utils/EmployeeProvider"; // provider pour que les composants accèdent au contexte des employés

// composant principal
function App() {
  return (
    <PrimeReactProvider>
      <EmployeeProvider>
        <RouterProvider router={router} />
      </EmployeeProvider>
    </PrimeReactProvider>
  );
}

export default App;
