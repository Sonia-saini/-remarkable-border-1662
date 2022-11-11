import { Button } from "@chakra-ui/react"
import "../App.css"
export default function Signup(){
    return (
        <div>
            
            
            <div id="create" style={{height:"700px",marginTop:"400px"}}>
       <b> <h2 style={{marginLeft:"60px",width:"300px"}}>CREATE NEW ACCOUNT</h2></b>
        <form id="form">
            <div id="top">
                <div><p><input type="radio" name="choice" class="select" value="PERSONAL" required/> PERSONAL</p></div>
                <div><p><input type="radio" name="choice" class="select" value="COMPANY" required/> COMPANY</p></div>
            </div>
            <div id="inside" >
                <div id="left">
                    <div class="details">
                        <input id="email" type="email" placeholder="E-MAIL" required className="input"/><br/>
                        <input id="password" type="password" placeholder="PASSWORD" required className="input"/><br/>
                        <input id="name" type="text" placeholder="NAME" required className="input"/><br/>
                        <input id="address" type="text" placeholder="ADDRESS" required className="input"/><br/>
                        <input id="locality" type="text" placeholder="LOCALITY" required className="input"/><br/>
                        <select name="STATE" id="state" required>
                            <option value="">STATE</option>
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
                        <input id="phone" type="number" placeholder="TELEPHONE" required className="input"/><br/>
                    </div>
                </div>
                <div id="right">
                    <div class="details">
                        <input id="re-password" type="password" placeholder="REPEAT PASSWORD" required className="input"/>
                        <input id="pincode" type="number" placeholder="PINCODE" required className="input"/>
                        <input id="info" type="text" placeholder="MORE INFO (Optional)" className="input"/>
                        <input id="city" type="text" placeholder="CITY" required className="input"/>
                    </div>
                </div>
            </div>
            <p class="privacy"><input type="checkbox" name="reciv" required />I WISH TO RECIEVE ZARA NEWS ON MY E-MAIL</p>
            <p class="privacy"><input type="checkbox" name="accept" required />I ACCEPT THE</p>
            <div id="er"></div>
            <Button width={"80px"}bgColor="black" color="white" margin={"auto"}>SIGNUP</Button>
        </form>
    </div>
        </div>
        
        
    )
}