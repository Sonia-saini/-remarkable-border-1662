
import {Button,Input,Image} from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../context/contexted"
export default function Navbar(){
    const {input,search,submit,state}=useContext(AppContext);
    return (
        
        <div style={{border:"1px solid gray"}}>
            <div style={{display:"flex" ,gap:"120px",marginTop:"50px",marginLeft:"50px"}}>
        <div style={{display:"flex",gap:"10px"}}>
    <Link to="/">    <Image src={`https://i.ibb.co/GHH8pvD/beautapp-1.png`} alt="" width="100px" height="100px" style={{borderRadius:"40%",marginTop:"-28px"}}/><h1 style={{fontFamily:"fantasy"}}>SHINE CONFIDENTLY</h1></Link>
        </div> 
        <div>
            <Input placeholder="...Search here" style={{border:"1px solid",width:"400px",height:"40px",marginTop:"-55px"}} value={input} onChange={search}/>
           <Button onClick={submit}><Image src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" width={"40px"} height="40px" borderRadius={"50%"}/></Button>
           
          
                    </div>
                    <div style={{display:"flex",gap:"90px"}}>
<div style={{display:"flex",gap:"10px"}}>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8e1XkIN5Pa8yiLlgHusqgqpfL2WCXLO6XA&usqp=CAU" width={"30px"} height="30px"/>
    <h1>ACCOUNT</h1></div>
 <Link to="/login">   <Button>LOGIN</Button></Link>
  <Link to="/cart"> <div style={{display:"flex",gap:"10px"}}> <Image src="https://w1.pngwing.com/pngs/720/451/png-transparent-shopping-cart-icon-shopping-bag-tote-bag-icon-design-online-shopping-black-and-white-area-rectangle.png" width={"20px"} height="20px"/>
  <h1 style={{backgroundColor:"black",color:"white",borderRadius:"50%",height:"20px", width:"20px",fontSize:"12px",marginTop:"-10px",marginLeft:"-17px"}}>{state.length}</h1>
<h1>CART</h1></div></Link>
</div>

</div>
<div style={{display:"flex",gap:"50px" ,margin:"20px",marginLeft:"63px"}}>
  <Link to="/skincare"> <h1>SKIN CARE</h1></Link> 
  <Link to="/toolsanddevices">   <h1>TOOLS & DEVICES</h1></Link>
  <Link to="/moisturizers"> <h1>MOISTURIZERS</h1></Link>
  <Link to="/haircare"> <h1>HAIR CARE</h1></Link>
  <Link to="/makeup"> <h1>MAKEUP</h1></Link>
  <Link to="/fragrance"> <h1>FRAGRANCE</h1></Link>

</div>

        </div>
        
    )
}