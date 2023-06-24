import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProducts from "../pages/ViewProducts";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import DetailProduct from "../pages/DetailProduct";
export default function Routeslist() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/viewproducts" element={<ViewProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/detail" element={<DetailProduct/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}