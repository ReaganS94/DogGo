import React from 'react'
import {Link} from 'react-router-dom'

function ConnectedDogs({dog}) {

  console.log(dog);
 
    return (
      <div className="linkedDogs">
       <h4>my fluffy friends</h4>
       <div className="dogPics">
         {dog.map((dog) => (
         <div className="dogDetails">
        <Link to={`/dogprofile/${dog._id}`}> <img src={dog.profilePic} /> </Link>
         <h6>{dog.name}</h6>
         </div>))}
     </div>
    </div>

    )
  
}

export default ConnectedDogs; 
