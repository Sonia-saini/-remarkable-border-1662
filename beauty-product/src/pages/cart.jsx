import Footer from "./footer";
import { TableContainer,Table,TableCaption,Thead,Tr,Th,Tbody,Td,Tfoot, Button,Image } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/contexted";
import { useState } from "react";
import { removed } from "../context/cartaction"; 
import { Link } from "react-router-dom";
import "../App.css"
export default function Cart(){
    const {state,dispatch,amount}=useContext(AppContext);
    const [coupon,setCoupon]=useState("");
    const [avail,setAvail]=useState(true)
    const [data, setData] = useState(state);

   const handleqant=(val,id)=>{
    setData(
        data.map((el) =>
          el.id === id ? { ...el, quantity: el.quantity + val } : el
        )
      );
   }
   let total=0;
   let totalprice=0;
for(let i=0;i<data.length;i++){
    total+=data[i].quantity;
    totalprice+=data[i].quantity*data[i].price
}
const [price,setPrice]=useState(totalprice)
const apply=()=>{
    if(coupon==="shine20")
    {
     setPrice(price-((price*10)/100));
     
     setCoupon("")
     setAvail(false)
}
else if(coupon!=="shine20"){
    alert("PLEASE CHECK YOUR COUPON CODE")
}



}
amount(price)
   console.log(price,"total",totalprice)
    return (
        <div>
            <TableContainer>
  <Table variant='simple'>
    <TableCaption>ONCE THE ORDER IS CONFIRMED YOU CAN'T CANCELLED</TableCaption>
    <Thead>
      <Tr>
        <Th>Items</Th>
        <Th ></Th>

        <Th>Price</Th>
        <Th >Quantity</Th>
        <Th >Subtotal</Th>
        <Th ></Th>

      </Tr>
    </Thead>
    <Tbody>
    {
        data&&data.map((el)=>(
        <Tr>
            <Td><Image src={el.url} alt="" width={"100px"} height="100px"/></Td>
            <Td>{el.title}</Td>
            <Td>${el.price}.00 /UNIT</Td>
            
            <Td>
                <Button disabled={el.quantity===1}onClick={()=>handleqant(-1,el.id)}>-</Button>
                <Button>{el.quantity}</Button>
                <Button onClick={()=>handleqant(+1,el.id)}>+</Button>

            </Td>
            <Td>${el.quantity*el.price}.00</Td>
            <Td><Button onClick={()=>dispatch(removed(el.id))}>Remove</Button></Td>

        </Tr>))
    }
    
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>TOTAL NO. OF PRODUCTS & TOTAL PRICE</Th>
        <Th></Th>
        <Th ></Th>
        
        <Th >TOTAL QUNATITY {total}</Th>
        <Th >TOTAL PRICE {totalprice}</Th>
        <Th ></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
<input type="text" placeholder="ENTER COUPON CODE" id="name" onChange={(e)=>setCoupon(e.target.value)} value={coupon}/>
<Button onClick={apply} disabled={!avail}>APPLY COUPON</Button><br></br>
<br></br>
<Button>TOTAL PAYBLE AMOUNT AFTER 10% DISCOUNT  {price}</Button><br></br>
<br></br>
<Link to="/payment"><Button>CHECKOUT</Button></Link>
            <Footer/>
        </div>
    )
}