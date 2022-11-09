import { Route ,Routes} from "react-router-dom";
import Home from "./home"
export default function Allroutes(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Home/>}></Route>
            <Route path="/login" element={<Home/>}></Route>

        </Routes>
        </>
    )
}