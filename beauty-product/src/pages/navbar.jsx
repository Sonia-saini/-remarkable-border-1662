
import {Button, ButtonGroup, IconButton,Input,Image} from "@chakra-ui/react"
export default function Navbar(){
    return (
        <div>
            <div style={{display:"flex" ,gap:"120px",marginTop:"50px",marginLeft:"50px"}}>
        <div style={{display:"flex",gap:"10px"}}>
        <Image src={`https://i.ibb.co/GHH8pvD/beautapp-1.png`} alt="" width="100px" height="100px" style={{borderRadius:"40%",marginTop:"-30px"}}/><h1 style={{fontFamily:"fantasy"}}>SHINE CONFIDENTLY</h1>
        </div> 
        <div>
            <Input placeholder="...Search here" style={{border:"1px solid",width:"400px",height:"40px",marginTop:"-55px"}}/>
           <Button><Image src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg" width={"40px"} height="40px" borderRadius={"50%"}/></Button>
           
          
                    </div>
                    <div style={{display:"flex",gap:"100px"}}>
<div style={{display:"flex",gap:"10px"}}>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8e1XkIN5Pa8yiLlgHusqgqpfL2WCXLO6XA&usqp=CAU" width={"30px"} height="30px"/>
    <h1>ACCOUNT</h1></div>
   <div style={{display:"flex",gap:"10px"}}> <Image src="https://w1.pngwing.com/pngs/720/451/png-transparent-shopping-cart-icon-shopping-bag-tote-bag-icon-design-online-shopping-black-and-white-area-rectangle.png" width={"20px"} height="20px"/>
<h1>CART</h1></div>
</div>

</div>
        </div>
        
    )
}