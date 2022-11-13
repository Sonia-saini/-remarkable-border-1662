import { Alert,AlertDescription,AlertIcon,AlertTitle, Button ,PinInput,HStack,PinInputField} from "@chakra-ui/react";
import Footer from "./footer";
import "../App.css"
import { useContext, useState } from "react";
import { AppContext } from "../context/contexted";
import { checkouted } from "../context/cartaction";
import { Navigate } from "react-router-dom";
export default function Payment(){
    const {state,total,dispatch,amount}=useContext(AppContext);
    const [pay,setPay]=useState(false);
    const [detail,setDetail]=useState({method:"",cardno:"",cvv:"",month:"",year:"",name:""})
    const {method,cardno,cvv,month,year,name}=detail
    const payment=()=>{
        if(method!==""&&cardno!==""&&cvv!==""&&month!==""&&year!==""&&name!==""){

            alert("Please verify OTP With in 10 Mintues")
            setPay(true)
        }
        else if(method===""||cardno===""||cvv===""||month===""||year===""||name===""){
            alert("Please fill all card details")
        }
        setDetail({method:"",cardno:"",cvv:"",month:"",year:"",name:""})

    }
    const handlepay=(e)=>{
        const {name,value}=e.target;
        setDetail({...detail,[name]:value})
    }
    const nav=()=>{
       return <Navigate to="/"/>
    }
    const confirm=()=>{
        dispatch(checkouted())
        amount(0)
        setPay(false)
        alert("ORDER IS CONFIRM YOU WILL GET IT WITHIN 78 HOURS")
        nav()
    }
  
    
    return (
        <div>
            <Alert status='error'>
  <AlertIcon />
  <AlertTitle>ONLY USE DEBIT CARD OR CREDIT CARD!</AlertTitle>
  <AlertDescription>NO EMI PAYMENT OR CASH ON DELIVERY METHOD PRESENT HERE .</AlertDescription>
</Alert>
           <b> <h2>ENTER YOUR PAYMENT DETAILS</h2></b>
    <div id="cont">
        <div style={{display:"flex",gap:"50px"}}>

            <select id="method" value={method} name="method" onChange={handlepay}> <option value="" >---select payment method---</option>
                <option value="credit card">CREDIT CARD</option>
           
            <option value="debit card" >DEBIT CARD</option></select></div>
        <input type="password" placeholder="CARD NUMBER" id="card"  value={cardno} name="cardno"onChange={handlepay}/>
        <select id="month" value={detail.month} name="month" onChange={handlepay}>
            <option value="">MONTH</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
        <select id="year" value={year} name="year" onChange={handlepay}>
            <option value="">YEAR</option>
            <option value="12">2020</option>
            <option value="13">2021</option>
            <option value="14">2022</option>
            <option value="15">2023</option>
            <option value="16">2024</option>
            <option value="17">2025</option>
            <option value="18">2026</option>
            <option value="19">2027</option>
            <option value="20">2028</option>
            <option value="21">2029</option>
            <option value="22">2030</option>
            <option value="23">2031</option>
        </select>
        <input type="text" placeholder="CARD HOLDER" id="name" value={name} name="name" onChange={handlepay}/>
        <input type="password" placeholder="CVV2 SECURITY CODE" id="cvvNo" value={cvv} name="cvv" onChange={handlepay}/>
       

        {total===0?"":<div style={{display:"flex",gap:"100px"}}><b>TOTAL PAYABLE AMOUNT</b><Button>{total}</Button></div>}
       { !pay?<Button id="on" onClick={payment}>Send OTP</Button>:<HStack>
  <PinInput type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  <Button onClick={confirm}>CONFIRM PAYMENT</Button>
</HStack> 
}
    </div>
    
            <Footer/>
        </div>
    )
}