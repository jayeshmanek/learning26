import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import ContentComponent from './Component/ContentComponent';
import { HeaderComponent } from './Component/HeaderComponent';
import { FooterComponent } from './Component/FooterComponent';
import { Demo1 } from './Component/Demo1';
import { NetflixHome } from './Component/NetflixHome';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Component/Navbar';

import { Netflixshow } from './Component/Netflixshow';
import { HomeComponent } from './Component/HomeComponent';
import NetflixSport from "./Component/NetflixSport"
import NetflixMovies from './Component/NetflixMovies';
import { NetflixNews } from './Component/NetflixNews';



//import './App.css'

function App() {
  
 

 
    
  return (

    <div>
      
    
      

    <Navbar></Navbar>
     <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshow" element={<Netflixshow />}></Route>
        <Route path="/HomeComponent" element={<HomeComponent />}></Route>
       <Route path="/netflixsport" element={<NetflixSport />}> </Route>
       <Route path="/netflixnews" element={<NetflixNews />}> </Route>

        
        <Route path="/" element = {<HomeComponent/>}></Route>
      </Routes>
         
   </div>
     
  );

}
  

export default App;
