import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Portofolio from "../pages/portofolio";
import About from "../pages/about-me";
import Detail from "../pages/detail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portofolio",
        element: <Portofolio />,
      },
      {
        path: "/about-me",
        element: <About />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
