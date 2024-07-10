import { createBrowserRouter } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee";
import Employees from "../pages/Employees";

// router avec les pages accueil et employés
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
]);

export default router;
