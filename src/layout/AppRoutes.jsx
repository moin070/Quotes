import { createHashRouter } from "react-router-dom";
import Sign_in from "../pages/Sign_in";
import Sign_up from "../pages/Sign_up";
import Home from "../component/Home";
import CreateQuotes from "../component/CreateQuotes";
import AllQuotes from "../component/AllQuotes";
import Error from "../pages/Error";

export const routes = createHashRouter([
  {
    path: "/",
    element: <Sign_in />,
  },
  {
    path: "/signup",
    element: <Sign_up />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <AllQuotes />,
      },
      {
        path: "/home/create",
        element: <CreateQuotes />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
