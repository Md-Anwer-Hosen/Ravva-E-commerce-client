import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import ProductDetails from "../pages/ProductDetails";
import MyCart from "../pages/MyCart";
import Login from "../components/Login";
import Register from "../components/Register";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
