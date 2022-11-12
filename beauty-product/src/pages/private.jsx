import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { loginContext } from "../context/logincontext"

export default function Private({children}){
    const{states}=useContext(loginContext);
    if(!states.isAuth){
        return <Navigate to="/login"/>
    }
    return (
        <>{children}</>
    )
}