import React from 'react'

function ConnectedDogs({dog}) {

  console.log(dog);
 
    return (
      <div className="linkedDogs">
       <h4>my fluffy friends</h4>
      <div className="dogPics">
       {dog.map((dog) => (
       <img src={dog.profilePic} />))}
      </div>
    </div>

    )
  
}

export default ConnectedDogs; 
