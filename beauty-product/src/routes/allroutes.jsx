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
import Private from "../pages/private";
import Checkout from "../pages/checkout";
export default function Allroutes(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
          
          
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/skincare" element={<Private><Skincare/></Private>}></Route>
<Route path="/haircare" element={<Private><Haircare/></Private>}></Route>
<Route path="/makeup" element={<Private><Makeup/></Private>}></Route>
<Route path="/toolsanddevices" element={<Private><Toolss/></Private>}></Route>
<Route path="/moisturizers" element={<Private><Moisturizers/></Private>}></Route>
   
    <Route path="/fragrance" element={<Private><Fragrance/></Private>}></Route>
    <Route path="/cart" element={<Private><Cart/></Private>}></Route>
        <Route path="/payment" element={<Private><Payment/></Private>}></Route>
        <Route path="checkout" element={<Private><Checkout/></Private>}></Route>
        </Routes>
        </>
    )
}