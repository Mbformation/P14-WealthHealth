import { createBrowserRouter } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee";
import Employees from "../pages/Employees";

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
