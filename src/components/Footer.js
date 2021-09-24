import React from 'react'; 
import {TiSocialFacebook, TiSocialTwitter, TiSocialPinterest} from 'react-icons/ti'; 
import {AiOutlineInstagram} from 'react-icons/ai';
import "./Footer.css"

import dog from '../img/transparent-background/18.png'
import logo from '../img/logo/logo_redyellow.png'

function Footer() {
    return (
    <>
     <div className="footer">
       <div className="logo">
         <img src={logo}/>  
         <p>join the community</p>
       </div>
       <div className="socialMedia">
             <TiSocialFacebook className="icon"/>
             <AiOutlineInstagram className="icon"/>
             <TiSocialTwitter className="icon"/>
             <TiSocialPinterest className="icon"/> 
       </div>
       <div className="footerContent">
             <p>Copyright &copy; 2021</p>
             <p>Terms and Conditions</p>
             <p>Privacy Policy</p>
       </div>
    </div>
    </>
   
    )
}


export default Footer; 
