import React from 'react'
import  myimage from"../assets/images/ram.jpg";
import"../assets/css/ram component.css"



    var student={
        name:"manek jayesh",
        age:"21",
        city:"dwarka",
        contact:"6353390894",
        address:"vasai dwarka ",
      };
     
    var year=2026;

export default function ContentComponent() {
  return (

      
    
        
<div className="ram-container">
    
      
      

      <p>
    <b>Ram Bhagwan</b> Hindu dharm ke mahaan aur poojniya devta hain.
    Unhe <b>Maryada Purushottam</b> kaha jata hai kyunki unka jeevan
    sachchai, dharm aur kartavya ka sarvottam udaharan hai.
  </p>

  <p>
    Ram Bhagwan Ayodhya ke rajkumar the. Unhone 14 saal ka vanvaas
    sweekar kiya aur Ravan ka vadh karke dharm ki vijay sthapit ki.
  </p>

      <h2>Name: manek jayesh</h2>
      <h2>Age: 21</h2>
      <h2>City: dwarka</h2>
      <h2>Contact: 6353390894</h2>
      <h2>Address: vasai dwarka</h2>
      <h2>Year: 2026</h2>
      <img src={myimage} alt="jai shree ram" style={{width:'30%',height:'auto',diaplay:'flex'}}/>
    

    </div>
  )
}; 




