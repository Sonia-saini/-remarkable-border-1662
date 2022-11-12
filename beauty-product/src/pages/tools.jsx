import { useState } from "react";
import Footer from "./footer";
import Product from "./product";
import "../App.css"
export default function Toolss(){
    const [data,setData]=useState();
    const Append=()=>{
        fetch(`https://shines-node-deploy.onrender.com/products`).then((res)=>
             res.json()
        ).then((res)=>(
            setData(res.toolsanddevices)
        ))
            }
            Append()
    return (
        <div>
            <div style={{textAlign:"justify",margin:"30px"}}><b><h1 style={{fontSize:"30px"}}>Tools & Devices</h1></b>
           <p>623 results</p><br></br>
            <p>Incorporate new tools and devices into your daily routine. </p>
            </div>
            <div className="tool">
{
    data&&data.map((el)=><Product  props={el}/>)
}</div>
            <Footer/>
        </div>
    )
}