
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepages from "./components/pages/Homepages";
import About from "./components/pages/About";
import Users from "./components/pages/Users";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepages />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
       path: "/users" ,
       element: <Users />,
      },

    ],
  },
]);

export default router;
