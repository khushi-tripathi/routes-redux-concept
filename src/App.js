import "./App.css";
import { createBrowserRouter } from "react-router";
// import {  } from "react-router/dom";
import Home from "./pages.js/Home";
import About from "./pages.js/About";
import Contact from "./pages.js/Contact";
import { RouterProvider } from "react-router/dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <div className="App">
        <h1>Routing </h1>
      </div>
    </>
  );
}

export default App;
