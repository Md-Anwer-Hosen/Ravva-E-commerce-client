import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import ProductDetails from "../pages/ProductDetails";
import MyCart from "../pages/MyCart";
import Login from "../components/Login";
import Register from "../components/Register";
import AddProduct from "../pages/AddProduct";
import NotFoundPage from "../components/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () =>
          fetch(
            "https://ravva-e-commerce-server-production.up.railway.app/products"
          ),
        hydrateFallbackElement: (
          <span className="loading loading-spinner loading-lg"></span>
        ),
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://ravva-e-commerce-server-production.up.railway.app/products/${params.id}`
          ),
        hydrateFallbackElement: (
          <span className="loading loading-spinner loading-lg"></span>
        ),
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
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
