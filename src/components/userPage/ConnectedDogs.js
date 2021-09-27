import React from 'react'

function ConnectedDogs({dog}) {

  console.log(dog);
 
    return (
      <div className="linkedDogs">
       {dog.map((dog => <img src={dog.profilePic} />))};
      </div>

    )
  
}

export default ConnectedDogs; 
