import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import "./styles.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import EmployeeProvider from "./utils/EmployeeProvider";
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
