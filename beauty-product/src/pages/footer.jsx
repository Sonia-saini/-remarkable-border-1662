import { Button ,Image} from "@chakra-ui/react";

export default function Footer(){
    return (
        <div>
            <div style={{display:"flex",margin:"50px",gap:"200px",borderTop:"1px solid gray"}}>
                <div style={{marginTop:"30px",marginBottom:"30px"}}><p>Sign up to our newsletters and receive the latest exclusive discounts and deals</p>
                <Button bg={"gray"}  marginTop="20px">SIGN UP ME</Button></div>
                <div style={{marginTop:"30px",marginBottom:"30px"}}>
                    <p>Connect with us</p>
                    <div style={{display:"flex",marginTop:"20px"}}>
                     <a href="https://www.facebook.com/DermStore" > <Image src="https://www.mhpcolorado.org/wp-content/uploads/2021/02/TS-FB-Icon.png" width="50px" height="50px"/></a> 
                     <a href="http://instagram.com/dermstore" >      <Image src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000" width="50px" height="50px"/></a> 
                     <a href="https://twitter.com/dermstore" >    <Image src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png" width="50px" height="50px"/></a> 
                     <a href="http://www.youtube.com/user/dermstore/shopblushtv" > <Image src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" width="50px" height="50px"/></a> 
                     <a href="http://www.pinterest.com/dermstore/" > <Image src="https://cdn-icons-png.flaticon.com/512/174/174863.png" width="50px" height="50px"/></a> 



                    </div>
                </div>
            </div>
            <div style={{display:"flex",gap:"50px",justifyContent:"center"}}>
                <div style={{textAlign:"left",borderTop:"1px solid gray"}}>
                   <b><h4>Customer Service</h4></b>
<p>Help Center & FAQs</p>
<p>Returns</p>
<p>Shipping Information</p>
<p>Track my order</p>
<p>Cookie Settings</p>

                </div>
                <div style={{textAlign:"left",borderTop:"1px solid gray"}}>
                   <b><h1>My Account</h1></b>
                    <p>Manage My Auto-Replenishments</p>
                    <p>My Rewards</p>
                    <p>My Favorites</p>
                    <p>Refer a Friend</p>
                    <p>Order History</p>

                </div>
                <div style={{textAlign:"left",borderTop:"1px solid gray"}}>
                  <b><h1>Company</h1></b>
                    <p>About Us</p>
                    <p>Press</p>
                    <p>What is Klarna?</p>

                </div>
                <div style={{textAlign:"left",borderTop:"1px solid gray"}}>
                   <b> <h1 >Legal</h1></b>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Modern Slavery Statement</p>
                    <p>Product Recall</p>
                    <p>Accessibility</p>

                </div>
            </div>
            <div style={{display:"flex",gap:"500px",justifyContent:"center",marginTop:"70px",borderTop:"1px solid gray"}}>
            <div style={{marginTop:"50px",marginBottom:"50px"}}>
                <b><h1 style={{fontSize:"60px"}}>T H G</h1></b>
                <p>2022 © The Hut.com Ltd.</p>
            </div>
            <div style={{marginTop:"50px",marginBottom:"50px"}}>
                <b><h1>Pay with Securely</h1></b>
                <div style={{display:"flex",gap:"30px",marginTop:"10px"}}>
                <Image src="https://namibind.com/wp-content/uploads/2019/06/visa-icon.png" width="50px" height={"50px"}/>
                <Image src="https://user-images.githubusercontent.com/58016672/79637419-15929d00-819d-11ea-82a8-f575303bab12.jpg" width="50px" height={"50px"}/>
                <Image src="https://cdn.iconscout.com/icon/free/png-256/google-pay-2038779-1721670.png" width="50px" height={"50px"}/>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriHydUw9Q6IPn7Bkzbzzf-VLFTCfIXBnh183XP2BcVg&s" width="50px" height={"50px"}/>
                <Image src="https://image.shutterstock.com/image-vector/insert-card-icon-debit-hand-260nw-1263648994.jpg" width="50px" height={"50px"}/>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MIi0H8wi-yitpribGaf_xOJRLWUsMmV-KAchI2IBQ00XwPIUaIQDRf-8YvKATR1kJBw&usqp=CAU" width="50px" height={"50px"}/>
                <Image src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-02/07/full/1581050739-6621.jpg" width="50px" height={"50px"}/>


</div>
            </div>
            </div>
        </div>
    )
}