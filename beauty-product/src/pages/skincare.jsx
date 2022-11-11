import { useState } from "react";
import Footer from "./footer";
import Product from "./product";
import "../App.css"
export default function Skincare(){
    const [data,setData]=useState();
    const Append=()=>{
        fetch(`http://localhost:8000/products`).then((res)=>
             res.json()
        ).then((res)=>(
            setData(res.skincare)
        ))
            }
            Append()
    return (
        <div>
            
           
           
           <div style={{textAlign:"justify",margin:"30px"}}><b><h1 style={{fontSize:"30px"}}>Skincare</h1></b>
           <p>4733 results</p><br></br>
            <p>At Dermstore, we feature a highly curated collection of skin care products and sets. You'll find professional-strength formulas from top skin care brands, historically only available at a dermatologist's office, and specialty brands from around the world. From acne treatments to natural and anti-aging skin care, whether you're concerned with prevention or in search of an effective solution for a specific issue, you'll find everything you need in our collection. Browse products formulated with the most effective skin care ingredients including vitamins C and E and retinol and explore the industry's leading brands, including SkinCeuticals, SkinMedica, EltaMD, Obagi and Eminence Organic Skin Care. </p>
            </div>
            <div className="skincare">
{
    data&&data.map((el)=><Product props={el}/>)
}</div>
            <Footer/>
        </div>
    )
}