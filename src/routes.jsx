import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <div>About</div> },
      { path: "/contact", element: <div>Contact</div> },
    ],
  },
]);

export default routes;
