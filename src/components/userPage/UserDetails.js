import React, {useState} from 'react'
import ToggleButton from './ToggleButton'

import {MdLocationCity} from 'react-icons/md';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineFieldNumber} from 'react-icons/ai'


function UserDetails({user}) {

        
    const [toggled, setToggled] = useState(false); 
    
    const onChange = (event) => {
        setToggled(event.target.checked)
    }
    
    return (
        <div className="userDetails">
            <div className="userDetailsLeft ">
              <img src={user.profilePic} className="profilePic"/> 
              
              <div className="userLocation">
              <MdLocationCity className="userPageIcon" /> 
              <h6  className='textred'>{user.city}</h6>
              </div>

              <div className="userEmail">
              <AiOutlineMail className="userPageIcon"/>
              <h6 className="textred">{user.email}</h6>
              </div>

              <div className="userNumber">
              <AiOutlineFieldNumber className='userPageIcon'/>
              <h6 className='textred'>{user.phoneNumber}</h6>
              </div>

            </div>

            <div className="userDetailsMiddle">
                  <h6>Hi, my name is {user.username}</h6>
                  <h6>{user.about}</h6>
            </div> 

            <div className="userDetailsRight">
            <ToggleButton onChange={onChange}/>
              <p>{toggled ? "Open to take care of your buddy" : ""}</p>
            </div>
        </div>
    )
}

export default UserDetails; 
