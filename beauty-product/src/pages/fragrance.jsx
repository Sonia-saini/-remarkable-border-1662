import { useState } from "react";
import Footer from "./footer";
import Product from "./product";
import "../App.css"
export default function Fragrance(){
    const [data,setData]=useState();
    const Append=()=>{
        fetch(`http://localhost:8000/products`).then((res)=>
             res.json()
        ).then((res)=>(
            setData(res.fragrance)
        ))
            }
            Append()
    return (
        <div>
            <div style={{textAlign:"justify",margin:"30px"}}><b><h1 style={{fontSize:"30px"}}>Fragrance</h1></b>
           <p>359 results</p><br></br>
            <p>Personal fragrance is an essential element of the impression we make. Dermstore’s fragrance shop offers a variety of eau de perfume, eau de toilette, cologne, body care, and everything you need to make your home feel like a wellness oasis. </p>
            </div>
            <div className="fragrance">
{
    data&&data.map((el)=><Product props={el}/>)
}</div>
            <Footer/>
        </div>
    )
}