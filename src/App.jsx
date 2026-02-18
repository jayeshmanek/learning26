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
import Watch from "./Component/Api/Watch";
import IPLTeams from './Component/IplTeam';
import { FunctionDemo1 } from './Component/FunctionDemo1';
import { UseStateDemo1 } from './Component/UseStateDemo1';
import Employees from './Component/Employees';
import UseStateDemo2 from './Component/UseStateDemo2';
import CardComponent from './Component/CardComponent';
import InputDemo1 from './Component/input/InputDemo1';
import InputDemo2 from './Component/input/InputDemo2';
import { FormDemo1 } from './Component/Form/FormDemo1';
import { FormDemo2 } from './Component/Form/FormDemo2';
import { FormStudent } from './Component/Form/FormStudent';
import { ApiDemo1 } from './Component/Api/ApiDemo1';
import Apitable from './Component/Api/ApliTable';
import Apicall from './Component/Api/Apicall';
import { ApiDemo2 } from './Component/Api/ApiDemo2';
import { OmdbSearch } from './Component/Api/OmdbSearch';
import { ApiDemo3 } from './Component/Api/ApiDemo3';




function App() {
  
 

 
    
  return (

    <div>
      
    
      

    <Navbar></Navbar>
     <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshow" element={<Netflixshow />}></Route>
        <Route path="/HomeComponent" element={<HomeComponent />}></Route>
        <Route path="/netflixnews" element={<NetflixNews />}></Route>
       <Route path="/NetflixSport" element={<NetflixSport />}></Route>
       <Route path="/FunctionDemo1" element={<FunctionDemo1 />}></Route>
       <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
      <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
      <Route path="/employees" element ={<Employees/>}></Route>
      <Route path="/CardComponent" element ={<CardComponent/>}></Route>
      <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
      <Route path="/inputdemo1" element = {<InputDemo2/>}></Route>
       <Route path="/FormDemo1" element = {<FormDemo1/>}></Route>
      <Route path="/FormDemo2" element = {<FormDemo2/>}></Route>
       <Route path="/FormStudent" element = {<FormStudent/>}></Route>
       <Route path="/ApiDemo1" element = {<ApiDemo1/>}></Route>
        <Route path="/ApiDemo2" element = {<ApiDemo2/>}></Route>
        <Route path="/ApiDemo3" element = {<ApiDemo3/>}></Route>
      <Route path="/Apitable" element = {<Apitable/>}></Route>
      <Route path="/Apicall" element = {<Apicall/>}></Route>
      <Route path="/OmdbSearch" element = {<OmdbSearch/>}></Route>


       <Route path="/ipl" element={<IPLTeams/>}></Route>
       <Route path="/" element = {<HomeComponent/>}></Route>



          {/* Dynamic watch page */}
        <Route path="*" element={<ErrorNotFound />} />
        
<Route path="/watch/:id" element={<Watch />} />
      
       
     
                            

        
        
         </Routes>
         
   </div>
     
  );

}
  

export default App;
