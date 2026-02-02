import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ContentComponent from './Component/ContentComponent';
import { HeaderComponent } from './Component/HeaderComponent';
import { FooterComponent } from './Component/FooterComponent';
import { Demo1 } from './Component/Demo1';
import { Demo2 } from './Component/Demo2';
import { Demo3 } from './Component/Demo3';
import { Demo4 } from './Component/Demo4';
import { Demo5 } from './Component/Demo5';

//import './App.css'

function App() {
  
 

 
    
  return (

    <div>
      <HeaderComponent></HeaderComponent>
      <Demo1></Demo1>
      <Demo2></Demo2>
      <Demo3></Demo3>
      <Demo4></Demo4>
      <Demo5></Demo5>
      
      <FooterComponent></FooterComponent>
      
        
   </div>
     
  );

}
  

export default App;
