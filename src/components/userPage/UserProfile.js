import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './UserProfile.css'
import HeaderUserProfile from './HeaderUserProfile'
import ToggleButton from './ToggleButton'

function UserProfile() {

/*const [user, setUsers] = useState([]); 
    
useEffect(() => {
        axios
          .get("https://dry-temple-96625.herokuapp.com/users")
          .then((json) => {
            setUsers(json.data.data);
            console.log("users", json.data.data);
          })
          .catch((err) => console.log(err));
      }, []);
    
     */ 
   

  const [toggled, setToggled] = useState(false); 

  const onChange = (event) => {
      setToggled(event.target.checked)
  }

    return (
    <div className="userProfile">
        <HeaderUserProfile/>
        
        <div className="userDetails">
            <div className="userDetailsLeft backgroundred">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2459&q=80" className="profilePic"/>
              <h6>location</h6>
              <h6>contact</h6>
            </div>

            <div className="userDetailsMiddle backgroundyellow">
                  <h5>name</h5>
                  <h6>about</h6>
                  <p>text</p>
            </div> 

            <div className="userDetailsRight backgroundblue">
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

export default UserProfile

