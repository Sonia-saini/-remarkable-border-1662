import {  Image,Box,Badge, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Single({url,price,rating,title}){
   
    let arr=[];
    for(let i=0;i<rating;i++){
        arr.push(i+1)
    }
// asdfdfs
    
      return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={url} alt={""} />
    
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
             
             
            </Box>
    
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
          <Link to="/login">  <Button>SEE MORE</Button></Link>
          </Box>
        </Box>
      );
}