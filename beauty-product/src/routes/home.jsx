import Footer from "../pages/footer"
import { Component, useContext, useState } from "react";
import Slider from "react-slick";
import {Button, Image,Text,Stack,Skeleton,Alert,AlertDescription,AlertIcon,AlertTitle} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import Single from "./single";
import '../App.css';
import { AppContext } from "../context/contexted";
import Product from "../pages/product";

export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div>
          
          <Slider {...settings}>
            <div>
              <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg"/>
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg"/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif"/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg"/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg"/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif"/>
              
            </div>
          </Slider>
        </div>
      );
    }
  }
  export  class PauseOnHovers extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
       
        
      };
      return (
        <div>
          
          <Slider {...settings}>
            <div>
              <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/chantecaille.gif" width="150px" height={"100px"}/>
            </div>
            <div>
            <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif"  width="150px" height={"100px"}/>
        
            </div>
            <div>
            <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/elemis.gif" width="150px" height={"100px"}/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/pcaskin.gif" width="150px" height={"100px"}/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/gloskinbeauty.gif" width="150px" height={"100px"}/>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/augustinusbader.gif" width="150px" height={"100px"}/>
    
            </div>
            <div>
                <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/exuviance.gif" width="150px" height={"100px"}/>
            </div>
            <div>
                <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/firstaidbeauty.gif" width="150px" height={"100px"}/>
            </div> <div>
                <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/neostrata.gif" width="150px" height={"100px"}/>
            </div> <div>
                <Image src="https://static.thcdn.com/design-assets/images/logos/shared-brands/colour/lightstim.gif" width="150px" height={"100px"}/>
            </div>
          </Slider>
        </div>
      );
    }
  }
  export  class Rtl extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
      };
      return (
        <div>
          
          <Slider {...settings}>
            <div style={{border:"1px solid"}}>
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11921605-1934931961112791.jpg"/>
              <Button>Chantecaille Bio Lifting Mask+ 50ml</Button>
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/small/webp//productimg/original/12932548-2534984326440526.jpg"/>
            <Button>SkinCeuticals Phyto Corrective Essence Mist 50ml</Button>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/small/webp//productimg/original/13232876-3484931962051488.jpg"/>
            <Button>Elemis Dynamic Resurfacing Super-C Serum 30ml</Button>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13835523-5024993391621196.jpg"/>
            <Button>PCA SKIN Resurfacing Serum 1 oz</Button>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13956540-1434996957844526.jpg"/>
            <Button>Glo Skin Beauty Dermstore Exclusive 
                <br></br>Bio-Renew EGF Cream and EGF Drops Duo</Button>
              
            </div>
            <div>
            <Image src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13920976-2644983786116838.jpg"/>
            <Button>Chantecaille Bio Lifting Serum+ 30ml</Button>
              
            </div>
          </Slider>
        </div>
      );
    }
  }
export  function Home(){
    const [data,setData]=useState();
  const {searchdata,error,load,input}=useContext(AppContext)

    const Append=()=>{
fetch(`https://shines-node-deploy.onrender.com/products`).then((res)=>
     res.json()
).then((res)=>(
    setData(res.makeup)
))
    }
    Append()
    
    return (
        
        <>
    <div className="search">  {load?<Stack>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/> <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/> <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/> <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/> <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
  <Skeleton height='20px' width={"90%"}/>
</Stack>:load==false&&error?<Alert status='error'>
  <AlertIcon />
  <AlertTitle>Something went wrong!</AlertTitle>
  <AlertDescription>please try again after sometime.</AlertDescription>
</Alert>:input!==""&&searchdata.length!==0?
  searchdata.map((el)=><Single {...el}/>):input!==""?<Alert status='error'>
  <AlertIcon />
  <AlertTitle>Your searching product is not available!</AlertTitle>
  <AlertDescription>You can search after sometime.</AlertDescription>
</Alert>:<b><Text style={{alignContent:"center",fontSize:"30px",marginLeft:"300px",width:"600px"}}>FEEL MORE CONFIDENT</Text></b>
}</div>  
        <PauseOnHover/>
        
        <div style={{display:"flex",marginTop:"40px",gap:"20px"}}>
            <div><Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/12/Revision_NPD-040112.png"/>
            <h1>NEW FROM REVISION SKINCARE</h1>
            </div>
            <div>
                <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/05/HP_LPSQ_BANNER_676x556-064705.jpg"/>
                <h1>SPOLIGHT ON: DR. LORETTA</h1>
            </div>
            <div>
                <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/49/PCA_Skin_NPD-055049.png"/>
                <h1>NEW FROM PCA SKIN</h1>
            </div>
        </div>
        <Text style={{marginTop:"50px",fontSize:"40px"}}>Skincare</Text>
        <Rtl/>
        <Text style={{marginTop:"50px",fontSize:"40px"}}>NEW TRENDING PRODUCTS</Text>
       <div className="newproduct">{
            data&&data.map((el)=><Single {...el}/>)
        }</div> 
        <Text style={{marginTop:"50px",fontSize:"40px",marginBottom:"30px"}}>Featured Brand</Text>

        <PauseOnHovers/>
        <Text style={{marginTop:"50px",fontSize:"40px",marginBottom:"30px"}}>Shop by Category</Text>
<div style={{display:"flex"}}>
  <Link to="/skincare">  <div>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/20/DS_Round_Nav_-_Untitled_Page_%287%29-052520.png"/>
       
       
    </div></Link>
    <Link to ="/tooolsanddevices"  > <div>
     <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2833%29-085536.png"/>
       
       
    </div> </Link> 
    <Link to="/moisturizers"><div>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/32/DS_Round_Nav_-_Untitled_Page_%289%29-052632.png"/>
     
     
    </div></Link>
    <Link to ="/haircare"  > <div>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/03/DS_Round_Nav_-_Untitled_Page_%2810%29-052703.png"/>
       
       
    </div> </Link>
    <Link to ="/makeup"  ><div>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/49/DS_Round_Nav_-_Untitled_Page_%2813%29-053649.png"/>
        
        
    </div></Link>
    <Link to ="/fragrance"  > <div>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/208-us/36/DS_Round_Nav_-_Untitled_Page_%2825%29-063536.png"/>
       
       
    </div></Link>
</div>
        <Footer/>
        </>
    )
}