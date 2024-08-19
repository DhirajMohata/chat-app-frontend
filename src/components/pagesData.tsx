import Home from "./Home";
import Login from "./Login";
import Signup from "./Register";
import Dashboard from "./Dashboard";

import { routerType } from "../types/router.types";



const pagesData: routerType[] = [
  {
    path: "chat",
    element: <Dashboard />,
    title: "login"
  },
  {
    path: "login",
    element: <Login />,
    title: "login"
  },
  {
    path: "signup",
    element: <Signup />,
    title: "signup"
  },
  {
    path: "",
    element: <Home />,
    title: "Home"
  },
  {
    path: "*",
    element: <div>Not Found</div>,
    title: "Not Found"
  }
];

export default pagesData;