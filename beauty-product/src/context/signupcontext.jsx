import { createContext, useReducer,useState } from "react";
import { signuped } from "./loginaction";
import { Signs } from "./loginreduce";
export const SignContext=createContext();
export default function SignProvider({children}){
    const[stated,dispatch]=useReducer(Signs,[]);
    const [user,setUser]=useState({name:"",email:"",password:"",state:"",city:"",reciv:false,accept:false,pincode:"",phone:"",
address:"",locality:"",repassword:""})
    const handlesign=(e)=>{
const {type,value,name,checked}=e.target;
let x=type==="checkbox"?checked:value;
setUser({...user,[name]:x})
    }
    const userSign=(e)=>{
e.preventDefault();
if(user.password!==user.repassword){
alert("please check your password")
}
else if(user.reciv===false||user.accept===false){
alert ("please accept privicy or terms and condition")
}

else{
    alert ("Congratulation you are successfully create account")
    dispatch(signuped(user))
    setUser({name:"",email:"",password:"",state:"",city:"",reciv:false,accept:false,pincode:"",phone:"",
    address:"",locality:"",repassword:""})
}

    }
    return(
        <><SignContext.Provider value={{handlesign,userSign,user,stated}}>{children}</SignContext.Provider></>
    )
}