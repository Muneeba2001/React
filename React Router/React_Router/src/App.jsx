import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  const router = createBrowserRouter([
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
      path: "/About",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <NavBar />
          <Contact />
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
