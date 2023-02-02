import { createBrowserRouter,RouterProvider } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootPage from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productID", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
