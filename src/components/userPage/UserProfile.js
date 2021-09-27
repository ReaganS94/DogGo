import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './UserProfile.css'
import HeaderUserProfile from './HeaderUserProfile'
import ToggleButton from './ToggleButton'


function UserProfile() {

const [user, setUser] = useState([]); 
const {id} = useParams();
    
useEffect(() => {
        axios
          .get(`https://dry-temple-96625.herokuapp.com/users/${id}`)
          .then((json) => {
            setUser(json.data.data);
            console.log("user", json.data.data);
          })
          .catch((err) => console.log(err));
      }, []);
    
    

  const [toggled, setToggled] = useState(false); 

  const onChange = (event) => {
      setToggled(event.target.checked)
  }

    return (
      <div className="userProfile">    
        <HeaderUserProfile/>
        <div className="userDetails backgroundred">
            <div className="userDetailsLeft ">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2459&q=80" className="profilePic"/>
              <p>{user.city}</p>
              <p>{user.contacts}</p>
            </div>

            <div className="userDetailsMiddle">
                  <h5>{user.username}</h5>
                  <h6>{user.about}</h6>
            </div> 

            <div className="userDetailsRight">
            <ToggleButton onChange={onChange}/>
              <p>{toggled ? "Open to take care of your buddy" : ""}</p>
            </div>
           </div>


        <div className="linkedDogs">
             <img src="https://images.unsplash.com/photo-1610312287759-a7aae807b165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" width="200px"/>
             <img src="https://images.unsplash.com/photo-1610312287759-a7aae807b165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" width="200px"/>
             <img src="https://images.unsplash.com/photo-1610312287759-a7aae807b165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" width="200px"/>
        </div>

        
     </div>
)

}

export default UserProfile;

