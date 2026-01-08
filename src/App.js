import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
// import {  } from "react-router/dom";
import Home from "./pages.js/Home";
import About from "./pages.js/About";
import Contact from "./pages.js/Contact";
import { RouterProvider } from "react-router/dom";
import NavBar from "./Components/NavBar";

function App() {
  // another way to do the same thing means create routes with the help of routes.
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/contact" element={<Contact />} />
  //   </>
  // );
  // const router = createBrowserRouter(routes);

  // creating route directly
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> }, // we can see navbar and home has same '/' path so instead of this we can use index true which means it will go to parent route
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
