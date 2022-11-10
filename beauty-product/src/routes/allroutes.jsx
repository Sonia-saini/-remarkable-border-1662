import { Route ,Routes} from "react-router-dom";
import Cart from "../pages/cart";
import Fragrance from "../pages/fragrance";
import Haircare from "../pages/haircare";
import Makeup from "../pages/makeup";
import Moisturizers from "../pages/moisture";
import Payment from "../pages/payment";
import Signup from "../pages/sign";
import Skincare from "../pages/skincare";
import Toolss from "../pages/tools";
import {Home} from "./home"
import Login from "../routes/login"
export default function Allroutes(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
          
          
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/skincare" element={<Skincare/>}></Route>
<Route path="/haircare" element={<Haircare/>}></Route>
<Route path="/makeup" element={<Makeup/>}></Route>
<Route path="/toolsanddevices" element={<Toolss/>}></Route>
<Route path="/moisturizers" element={<Moisturizers/>}>
    </Route>
    <Route path="/fragrance" element={<Fragrance/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        </Routes>
        </>
    )
}