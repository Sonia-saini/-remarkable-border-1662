import {Alert,AlertIcon,AlertTitle,AlertDescription,Button} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import "../App.css"
import { loginContext } from "../context/logincontext";
import Signup from "../pages/sign";
export default function Login(){
    const {states,hanglelog,log}=useContext(loginContext)
    if(states.isAuth){
        return <Navigate to="/"/>
     }
    return (
        <>
        <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Please fill all details correctly!</AlertTitle>
  <AlertDescription> If you fill Anything wrong detail , it will create problem.</AlertDescription>
</Alert>
        <div>
        <div id="main" style={{paddingTop:"200px"}}>
        <div style={{border:"1px solid",width:"400px",height:"400px",gap:"30px", padding: "50px",marginTop:"-590px"}}>
            <h2 id="h2">LOG IN</h2>
            <input type="text" placeholder="E-MAIL" id="email" className="input" name="email" onChange={hanglelog}/><br/>
            <input type="text" placeholder="USERNAME" id="email" className="input" name="name" onChange={hanglelog}/><br/>

            <input type="password" placeholder="PASSWORD" id="password" className="input"name="password" onChange={hanglelog}/>
            <p id="p">
                HAVE YOU FORGOTTEN YOUR PASSWORD?</p>
            <Button id="login" width={"80px"}bgColor="black" color="white" onClick={log}>LOG IN</Button>
        </div>
        <div style={{border:"1px solid",width:"500px",gap:"30px"}}>
         
         <Signup/>
        </div>
    </div>  
        </div>
        </>
    )
}