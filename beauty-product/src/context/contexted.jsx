import { useReducer } from "react";
import { createContext,useState } from "react"
import Reducer from "./cartreducer";

export const AppContext=createContext()
const initate=[];
export default function Appcontextprovider({children}){
    const [state,dispatch]=useReducer(Reducer,initate)
    const [total,setTotal]=useState(0);
    const [input,setInput]=useState("");
    const [searchdata,setSearchdata]=useState([])
    const [load,setLoad]=useState(false);
    const [error,setError]=useState(false)
    const search=(e)=>{
        setInput(e.target.value)
    }
    const submit=()=>{
        setLoad(true)
        fetch(`http://localhost:8000/products`).then((res)=>res.json())
        .then((res)=>(setSearchdata(res[input]), 
        setLoad(false),setError(false))
        .catch((err)=>(setError(true),setLoad(false)))
       )
       
    }
    const amount=(x)=>{
setTotal(x)
    }
    return (<AppContext.Provider value={{search,input,setInput,submit,load,error,searchdata,state,dispatch,amount,total}}>{children}</AppContext.Provider>)
}