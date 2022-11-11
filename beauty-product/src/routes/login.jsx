import {Alert,AlertIcon,AlertTitle,AlertDescription,Button} from "@chakra-ui/react";
import "../App.css"
import Signup from "../pages/sign";
export default function Login(){
    return (
        <>
        <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Please fill all details correctly!</AlertTitle>
  <AlertDescription> If you fill Anything wrong detail , it will create problem.</AlertDescription>
</Alert>
        <div>
        <div id="main" >
        <div style={{border:"1px solid",width:"400px",height:"350px",gap:"30px", padding: "50px"}}>
            <h2 id="h2">LOG IN</h2>
            <input type="text" placeholder="E-MAIL" id="email" className="input"/><br/>
            <input type="password" placeholder="PASSWORD" id="password" className="input"/>
            <p id="p">
                HAVE YOU FORGOTTEN YOUR PASSWORD?</p>
            <Button id="login" width={"80px"}bgColor="black" color="white">LOG IN</Button>
        </div>
        <div style={{border:"1px solid",width:"500px",gap:"30px"}}>
         
         <Signup/>
        </div>
    </div>  
        </div>
        </>
    )
}