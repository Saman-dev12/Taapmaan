import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "./components/Data";
import Root from "./components/Root";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
