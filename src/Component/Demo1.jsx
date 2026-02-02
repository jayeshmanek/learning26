import React from 'react'

export const Demo1 = () => {
    
    let cars=["BMW","Toyota","Hyundai","Kia"]


  return (
     <div style={{textAlign:"center"}}>
        
        
        <h1> DEMO1 </h1>
    {
    cars.map((c)=>{
    
        return <h1>{c}</h1>
    
    })
    
}
    </div>
  )
}
