import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
      index: true,
    },
    {
      path: "/Home",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/Category",
      element: (
        <>
          <NavBar />
          <Category />
        </>
      ),
    },
    {
      path: "/Product/:CategoryName?",
      element: (
        <>
          <NavBar />
          <Products />
        </>
      ),
    },
    {
      path: "/SignUp",
      element: (
        <>
          <NavBar />
          <SignUp />
        </>
      ),
    },
    {
      path: "/LogIn",
      element: (
        <>
          <NavBar />
          <LogIn />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <Error />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
