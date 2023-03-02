import React from "react";
import { Frame, Navigation } from "@shopify/polaris";
import "./App.css";
import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";
import TopBarExample from "./Components/TopBar";
import NavigationExample from "./Components/Navigation";
import SimpleIndexTableExample from "./Components/Customers";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Customer from "./Components/Customer";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/edit/:id",
    element: <Customer/>,
  },
]);

function App() {
  return (
    <>
      <TopBarExample />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
