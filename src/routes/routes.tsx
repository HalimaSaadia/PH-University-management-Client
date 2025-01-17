import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routeGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.route";
import Login from "../pages/login";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths)
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths)
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths)
  },
  {
    path:"/login",
    element:<Login />
  }
]);

export default router;
