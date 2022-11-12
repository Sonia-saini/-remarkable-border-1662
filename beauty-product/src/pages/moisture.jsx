import Footer from "./footer";
import { useState } from "react";
import Product from "./product";
import "../App.css"
export default function Moisturizers(){
    const [data,setData]=useState();
    const Append=()=>{
        fetch(`https://shines-node-deploy.onrender.com/products`).then((res)=>
             res.json()
        ).then((res)=>(
            setData(res.moisturizers)
        ))
            }
            Append()
    return (
        <div>
            
           
           
           <div style={{textAlign:"justify",margin:"30px"}}><b><h1 style={{fontSize:"30px"}}>Moisturizers</h1></b>
           <p>1516 results</p><br></br>
            <p>Dermstore offers a broad selection of dermatologist-recommended face moisturizers, eye creams, night creams and face oils that blend potent ingredients in a variety of formulas for all skin types and concerns. Many of these products feature broad-spectrum sun protection to reduce future sun damage, caffeine to target dark circles and puffiness, or a hint of pigment to help smooth and even skin tones. Use your skin type as a guide for which product will be the best addition to your daily beauty regimen. </p>
            </div>
            <div className="moisture">
{
    data&&data.map((el)=><Product props={el}/>)
}</div>
            <Footer/>
        </div>
    )
}