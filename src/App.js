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
import DummyAbout from "./pages.js/DummyAbout";
import DummyContact from "./pages.js/DummyContact";
import Blog from "./Components/Blogs/Blog";
import BlogContent from "./Components/Blogs/BlogContent";

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
      path: "/root",
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> }, // we can see navbar and home has same '/' path so instead of this we can use index true which means it will go to parent route
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "blogs",
          children: [
            {
              index: true,
              element: <Blog />,
            },
            {
              path: ":id",
              element: <BlogContent />,
            },
          ],
        },
      ],
    },
    // if parent path has some value then childre path also start with parent path then add /(children path). If we are not include the parent path then it will give error.
    // {
    //   path: "/dummy",
    //   element: <NavBar />,
    //   children: [
    //     {
    //       path: "/dummy/about",
    //       element: <DummyAbout />,
    //     },
    //     {
    //       path: "/dummy/contact",
    //       element: <DummyContact />,
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
