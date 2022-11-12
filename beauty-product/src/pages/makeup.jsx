import { useState } from "react";
import Footer from "./footer";
import Product from "./product";
import "../App.css"
export default function Makeup(){
    const [data,setData]=useState();
    const Append=()=>{
        fetch(`https://shines-node-deploy.onrender.com/products`).then((res)=>
             res.json()
        ).then((res)=>(
            setData(res.makeup)
        ))
            }
            Append()
    return (
        <div>
            <div style={{textAlign:"justify",margin:"30px"}}><b><h1 style={{fontSize:"30px"}}>Makeup</h1></b>
           <p>1119 results</p><br></br>
            <p>When you're ready to tackle the world of contouring, highlighting and barely-there makeup looks, let Dermstore be your go-to for cosmetics. Industry faves, such as Dermablend, jane iredale, Jouer and Tarte Cosmetics, often use skin-nourishing ingredients in their classic and playful pieces that draw upon your natural beauty. And since beauty is all about expressing yourself, you can't go wrong. </p>
            </div>
            <div className="makeup">
{
    data&&data.map((el)=><Product props={el}/>)
}</div>
            <Footer/>
        </div>
    )
}