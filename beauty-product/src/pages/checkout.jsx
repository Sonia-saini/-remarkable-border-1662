import Footer from "./footer";
import "../App.css"
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
export default function Checkout(){
    const [user,setUser]=useState({email:"",state:"",city:"",reciv:false,accept:false,pincode:"",phone:"",
    address:"",locality:""})
    const [delivery,setDelivery]=useState([]);
    const handlesign=(e)=>{
const {name,value}=e.target;
setUser({...user,[name]:value})
    }
    const same=()=>{
        alert("Thanks for confirming your same delivery address")
     return   <Navigate to="/payment"/>
    }
    const userSign=(e)=>{
        e.preventDefault()
        setDelivery([...delivery,user])
        alert("Thanks for confirming your new delivery address")
        return  <Navigate to="/payment"/>
    }
    return (
        <><div id="create" style={{height:"auto",margin:"auto",marginTop:"100px",border:"1px solid",padding:"50px"}}>
        <b> <h2 style={{marginLeft:"250px",width:"300px",marginBottom:"70px"}}>SELECT A DELIVERY ADDRESS</h2></b>
         <form id="form">
             <div id="top" style={{gap:"100px"}}>
                 <div><p style={{textAlign:"justify",width:"300px"}}><Link to="/payment"><input type="radio" name="choice" class="select" value="PERSONAL" required onClick={same}/> IF YOU WANT THE SAME ADDRESS AS YOU FILL AT THE TIME OF CREATING ACCOUNT </Link></p></div>
                 <div><p style={{textAlign:"justify",width:"300px"}}><input type="radio" name="choice" class="select" value="COMPANY" required/> ADD A NEW ADDRESS</p></div>
             </div>
             <div id="inside" >
                 <div id="left">
                     <div class="details">
                         <input id="email" type="email" placeholder="E-MAIL" required className="input" name="email" onChange={handlesign}/><br/>
                         <input id="address" type="text" placeholder="ADDRESS" required className="input" name="address" onChange={handlesign}/><br/>
                         <input id="locality" type="text" placeholder="LOCALITY" required className="input" name="locality" onChange={handlesign}/><br/>
                         <br></br>
                         
                         <select name="state" onChange={handlesign} required>
                             <option value="">---selelct state---</option>
                             <option value="andaman and nicobar island">ANDAMAN AND NICOBAR ISLAND</option>
                             <option value="Andhra Pradesh">ANDHRA PRADESH</option>
                             <option value="Arunachal Pradesh">ARUNACHAL PRADESH</option>
                             <option value="Assam">ASSSAM</option>
                             <option value="Bihar">BIHAR</option>
                             <option value="Chhattisgarh">CHHATTISGARH</option>
                             <option value="Goa">GOA</option>
                             <option value="Gujarat">GUJARAT</option>
                             <option value="Haryana">HARYANA</option>
                             <option value="Himachal Pradesh">HIMACHAL PRADESH</option>
                             <option value="Jharkhand">JHARKHAND</option>
                             <option value="Karnataka">KARNATAKA</option>
                             <option value="Kerala">KERALA</option>
                             <option value="Madhya Pradesh">MADHYA PRADESH</option>
                             <option value="Maharashtra">MAHARASHTRA</option>
                             <option value="Manipur">MANIPUR</option>
                             <option value="Meghalaya">MEGHALAYA</option>
                             <option value="Mizoram">MIZORAM</option>
                             <option value="Nagaland">NAGALAND</option>
                             <option value="Odisha">ODISHA</option>
                             <option value="Punjab">PUNJAB</option>
                             <option value="Rajasthan">RAJASTHAN</option>
                             <option value="Sikkim">SIKKIM</option>
                             <option value="Tamil Nadu">TAMIL NADU</option>
                             <option value="Telangana">TELANGANA</option>
                             <option value="Tripura">TRIPURA</option>
                             <option value="Uttar Pradesh">UTTAR PRADESH</option>
                             <option value="Uttarakhand">UTTARAKHAND</option>
                             <option value="West Bengal">WEST BENGAL</option>
                         </select>
                         
                         <input id="phone" type="number" placeholder="TELEPHONE" required className="input" name="phone" onChange={handlesign}/><br/>
                     </div>
                 </div>
                 <div id="right">
                     <div class="details">
                         <input id="pincode" type="number" placeholder="PINCODE" required className="input" name="pincode" onChange={handlesign}/>
                         <input id="info" type="text" placeholder="MORE INFO (Optional)" className="input" />
                         <input id="city" type="text" placeholder="CITY" required className="input" name="city" onChange={handlesign}/>
                     </div>
                 </div>
             </div>
             <br></br>
             <div id="er"></div>
            <Button width={"200px"}bgColor="black" color="white" margin={"auto"} onClick={userSign}> <Link to="/payment">ADD NEW ADDRESS</Link></Button>
         </form>
     </div>
        <Footer/></>
    )
}