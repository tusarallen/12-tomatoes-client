/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Banner from "../components/Banner/Banner";
import Secondary from "../layouts/Secondary";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage>Error</ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner />,
        loader: () => fetch("https://chef-recipe-server-tusarallen.vercel.app/shefCard"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/recipe/:id",
    element: (
      <PrivateRoutes>
        <Secondary />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage>Error</ErrorPage>,
    loader: ({ params }) => fetch(`https://chef-recipe-server-tusarallen.vercel.app/recipe/${params.id}`),
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <ErrorPage>Error</ErrorPage>,
  },
  {
    path: "/register",
    element: <SignUp />,
    errorElement: <ErrorPage>Error</ErrorPage>,
  },
]);

export default router;
