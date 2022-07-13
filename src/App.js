import "./App.css";
import Login from "./pages/Login";
import Editproduct from "./pages/Editproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Catogories from "./pages/Catogories";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/catogories" element={<Catogories />} />
        <Route path="*" element={<> not found</>} />
        {/* <Route path="/editproduct" element={<Editproduct />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
