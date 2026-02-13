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
import { ErrorNotFound } from './Component/ErrorNotFound';
import  Watch  from './Component/Watch';
import IPLTeams from './Component/IplTeam';
import { FunctionDemo1 } from './Component/FunctionDemo1';
import { UseStateDemo1 } from './Component/UseStateDemo1';
import { UseStateDemo2 } from './Component/UseStateDemo2';

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
       <Route path="/FunctionDemo1" element={<FunctionDemo1 />}></Route>
       <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
      <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>



       <Route path="/ipl" element={<IPLTeams/>}></Route>
       <Route path="/" element = {<HomeComponent/>}></Route>



          {/* Dynamic watch page */}
        <Route path="*" element={<ErrorNotFound />} />
        <Route path="/watch/:movieName" element={<Watch />} />
      
       
     
        
        
        
         </Routes>
         
   </div>
     
  );

}
  

export default App;
