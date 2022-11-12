import { createContext, useContext, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import { login,logout } from "./loginaction";
import LoginReduce from "./loginreduce";
import { SignContext } from "./signupcontext";

export const loginContext=createContext();
export default function Logined({children}){
    const [states,dispatch]=useReducer(LoginReduce,{isAuth:false,data:{}});
    const [logs,setLogs]=useState({email:"",password:"",name:""});
    const {stated}=useContext(SignContext);
    const [usered,setUsered]=useState({})
    const hanglelog=(e)=>{
        const {name,value}=e.target;
        setLogs({...logs,[name]:value});
    }
    const log=()=>{
        
        
for(let i=0;i<stated.length;i++){
    if(stated[i].email===logs.email&&stated[i].password===logs.password&&stated[i].name===logs.name){
        alert("You are successfully login,enjoy shopping")
        setUsered({...usered,logs})
        dispatch(login(logs))
    }
    else if(stated[i].email!==logs.email||stated[i].password!==logs.password||stated[i].name===logs.name){
alert("Please check your password or email id")
    }
}

console.log(states,"user")

    }
    const userout=()=>{
        dispatch(logout())
        console.log(states)
    }
    return (
        <><loginContext.Provider value={{states,hanglelog,log,userout}}>{children}</loginContext.Provider></>
    )
}