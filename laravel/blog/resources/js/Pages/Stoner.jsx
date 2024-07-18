import React from 'react'

function Stoner() {
    let bands = ["kyuss" , "Fu manchu" , "sleep" , "unida" , "LOS NATAS"] ; 
  return (
    <>
    <div>
      <h1 style={{color:"red"}}>Stoner Rock</h1>  
        {bands.map((band) => {
            return <div key={band} style={{color:"yellow"}}>{band}</div>  // Use band as the key for each band name
        })}
     </div>
    </>
  )
}

export default Stoner