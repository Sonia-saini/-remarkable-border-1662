import {  Image,Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { addtocart } from "../context/cartaction";
import { AppContext } from "../context/contexted";


export default function Product({props}){
  const {url,price,rating,title}=props
 
  
   const {state,dispatch}=useContext(AppContext);
    let arr=[];
    for(let i=0;i<rating;i++){
        arr.push(i+1)
    }

    console.log(state)
      return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={url} alt={""} />
    
          <Box p="6">
    
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {title}
            </Box>
    
            <Box>
              ${price}.00
              <Box as="span" color="gray.600" fontSize="sm">
                / UNIT
              </Box>
            </Box>
    
            <Box display="flex" mt="2" alignItems="center" gap="15px" justifyContent={"center"}>
             <Box display={"flex"} alignItems="center"> {arr
                .map((el, i) => (
                 <Image src="https://media.istockphoto.com/id/1295967422/vector/five-point-star-vector-icon-isolated-gold-star-rating-flat-symbol-vector.jpg?s=612x612&w=0&k=20&c=f9kJnuy_7JluRDG2ZgIPAkI33173kVwOuCBXe-z-w6Y=" width="40px" height={"40px"}/>
                    
                ))}</Box>
                <br></br>
                <br></br>
                
                

              
              
            </Box>
            <Button onClick={()=>dispatch(addtocart(props))}>QUICK BUY</Button>
          </Box>
        </Box>
      );
}