import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import "../App.css"
import { SignContext } from "../context/signupcontext"
export default function Signup(){
    const {handlesign,userSign,user,stated}=useContext(SignContext)
    console.log(user,stated)
    const {name,email,password,state,city,reciv,accept,pincode,phone,
    address,locality,repassword}=user;
    return (
        <div>
            
            
            <div id="create" style={{height:"auto",marginTop:"100px"}}>
       <b> <h2 style={{marginLeft:"60px",width:"300px"}}>CREATE NEW ACCOUNT</h2></b>
        <form id="form">
            <div id="top">
                <div><p><input type="radio" name="choice" class="select" value="PERSONAL" required/> PERSONAL</p></div>
                <div><p><input type="radio" name="choice" class="select" value="COMPANY" required/> COMPANY</p></div>
            </div>
            <div id="inside" >
                <div id="left">
                    <div class="details">
                        <input id="email" type="email" placeholder="E-MAIL" required className="input" name="email" value={email} onChange={handlesign}/><br/>
                        <input id="password" type="password" placeholder="PASSWORD" required className="input" value={password}name="password" onChange={handlesign}/><br/>
                        <input id="name" type="text" placeholder="NAME" required className="input" name="name" value={name} onChange={handlesign}/><br/>
                        <input id="address" type="text" placeholder="ADDRESS" required className="input" name="address" value={address} onChange={handlesign}/><br/>
                        <input id="locality" type="text" placeholder="LOCALITY" required className="input" name="locality" value={locality} onChange={handlesign}/><br/>
                        <br></br>
                        
                        <select name="state" value={state} onChange={handlesign} required>
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
                        
                        <input id="phone" value={phone} type="number" placeholder="TELEPHONE" required className="input" name="phone" onChange={handlesign}/><br/>
                    </div>
                </div>
                <div id="right">
                    <div class="details">
                        <input id="re-password" value={repassword} type="password" placeholder="REPEAT PASSWORD" required className="input" name="repassword" onChange={handlesign}/>
                        <input id="pincode" type="number" value={pincode} placeholder="PINCODE" required className="input" name="pincode" onChange={handlesign}/>
                        <input id="info" type="text"  placeholder="MORE INFO (Optional)" className="input" />
                        <input id="city" type="text" value={city} placeholder="CITY" required className="input" name="city" onChange={handlesign}/>
                    </div>
                </div>
            </div>
            <br></br>
            <p class="privacy"><input type="checkbox" name="reciv"value={reciv} required checked={user.reciv} onChange={handlesign}/>  I WISH TO RECIEVE SHINE CONFIDENTLY NEWS ON MY E-MAIL</p>
            <p class="privacy"><input type="checkbox" name="accept" required value={accept} checked={user.accept}onChange={handlesign}/>  I ACCEPT THE TERM AND CONDITION</p>
            <div id="er"></div>
            <Button width={"80px"}bgColor="black" color="white" margin={"auto"} onClick={userSign}>SIGNUP</Button>
        </form>
    </div>
        </div>
        
        
    )
}