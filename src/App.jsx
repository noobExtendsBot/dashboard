import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./components/pages/userList/UserList";
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/User";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";
import NewUser from "./components/pages/newUser/NewUser";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/user/create" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/create" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
