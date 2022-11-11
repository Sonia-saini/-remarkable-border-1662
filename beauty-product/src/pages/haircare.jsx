import { useState } from "react";
import Footer from "./footer";
import Product from "./product";
import "../App.css"
export default function Haircare(){
    const [data,setData]=useState();
    const Append=()=>{
        fetch(`http://localhost:8000/products`).then((res)=>
             res.json()
        ).then((res)=>(
            setData(res.haircare)
        ))
            }
            Append()
    return (
        <div>
            <div style={{textAlign:"justify",margin:"30px"}}><b><h1 style={{fontSize:"30px"}}>Hair Care Products</h1></b>
           <p>623 results</p><br></br>
            <p></p>
            </div>
            <div className="haircare">
{
    data&&data.map((el)=><Product props={el}/>)
}</div>
            <Footer/>
        </div>
    )
}