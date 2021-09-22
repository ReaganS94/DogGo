import React from 'react'; 
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialPinterest} from 'react-icons/ti'; 
import "./Footer.css"

function Footer() {
    return (
    <div className="footer">
           <div className="socialMediaIcons">
             <TiSocialFacebook className="icons"/>
             <TiSocialInstagram  className="icons"/>
             <TiSocialTwitter className="icons"/>
             <TiSocialPinterest className="icons"/>
           </div>
           <div className="footerContent">
             <p>Copyright &copy; 2021</p>
             <p>Terms and Conditions</p>
             <p>Privacy Policy</p>
           </div>
                
    </div>
    )
}


export default Footer; 
