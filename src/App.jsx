import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/categories"
          element={<Categories />}
        />

        <Route
          path="/admin/products"
          element={<Products />}
        />
        <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      
      
    </BrowserRouter>
  );
}