import React from 'react'; 
import {TiSocialFacebook, TiSocialTwitter, TiSocialPinterest} from 'react-icons/ti'; 
import {AiOutlineInstagram} from 'react-icons/ai';
import "./Footer.css"

import dog from '../img/transparent-background/3.png'
import logo from '../img/logo/doggo_ci_final_6.png'

function Footer() {
    return (
    <div className="footer">
           <img src={logo} className="logo" />
           <div className="socialMediaIcons">
             <TiSocialFacebook className="icons"/>
             <AiOutlineInstagram className="icons"/>
             <TiSocialTwitter className="icons"/>
             <TiSocialPinterest className="icons"/>
           </div>
           <div className="footerContent">
             <p>Copyright &copy; 2021</p>
             <p>Terms and Conditions</p>
             <p>Privacy Policy</p>
           </div>
           <img src={dog} className='footerKeeper'/>
    </div>
    )
}


export default Footer; 
