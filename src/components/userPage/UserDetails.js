import React, {useState} from 'react'
import ToggleButton from './ToggleButton'

import {MdLocationCity, MdPanoramaWideAngle} from 'react-icons/md';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineFieldNumber} from 'react-icons/ai'

import walkingDog from './9.svg'




function UserDetails({user}) {
  const [toggled, setToggled] = useState(false); 
    

 let openToDogSit = user.tags.map((tag) => (<button className="openButton">{tag.tag}</button>));
 let notOpenToDogSit = user.tags.map((tag) => <button className="closeButton">{tag.tag}</button>);



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
                  <h3>Hi, my name is {user.username}</h3>
                  <h6>about me</h6>
                  <p>{user.about}</p>
                  <div className="walkingDog"><img src={walkingDog} width="350px"/></div>
            </div>

            <div className="userDetailsRight">
            <p>Open to take care of your buddy</p>
            <ToggleButton onChange={onChange}/>
             {toggled ? openToDogSit : notOpenToDogSit}
            </div>
        </div>
    )
}

export default UserDetails; 
