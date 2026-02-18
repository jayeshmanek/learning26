import { NavLink } from "react-router-dom"
import "../assets/css/Navabar.css"
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      
      {/* Logo */}
      <NavLink className="navbar-brand fw-bold text-danger fs-4" to="/">
        NETFLIX
      </NavLink>

     
    
        
      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">

          <li className="nav-item">
            <NavLink
              to="/netflixhome"
              className="nav-link"
            >
              Netflix Home
            </NavLink>
          </li>

         {/* <li className="nav-item">
            <NavLink
              to="/netflixshow"
              className="nav-link"
            >
              Show
            </NavLink>
          </li>

           <li className="nav-item">
            <NavLink className="nav-link" to="/netflixsport">
              Sport
            </NavLink>
          </li>
          <li className="nav-item">
           <NavLink className="nav-link" to="/netflixmovies">
            Movies
          </NavLink>
          </li>

          <li className="nav-item">
           <NavLink className="nav-link" to="/Ipl">
            IplTeam
          </NavLink>
          </li>

          <li className="nav-item">
           <NavLink className="nav-link" to="/netflixnews">
            News
          </NavLink>
          </li>

          <li className="nav-item">
           <NavLink className="nav-link" to="/functiondemo1">
            FunctionDemo1
          </NavLink>
          </li>

           <li className="nav-item">
           <NavLink className="nav-link" to="/usestatedemo1">
            UseStateDemo1
          </NavLink>
          </li>
      
       <li className="nav-item">
           <NavLink className="nav-link" to="/usestatedemo2">
            UseStateDemo2
          </NavLink>
          </li>*/}

         {/*<li className="nav-item">
            <NavLink className="nav-link" to="/employees">
              employees
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/CardComponent">
              CardComponent
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/inputdemo1">
              inputdemo1
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/inputdemo2">
              inputdemo2
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Formdemo1">
              FormDemo1
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/FormDemo2">
              FormDemo2
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/FormStudent">
              FormStudent
            </NavLink>
          </li>*/}
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/ApiDemo1">
              ApiDemo1
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/ApiDemo3">
              ApiDemo3
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/ApiDemo2">
              ApiDemo2
            </NavLink>
          </li>*/}

          <li className="nav-item">
            <NavLink className="nav-link" to="/Apitable">
              Apitable
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/Apicall">
          Apicall
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/OmdbSearch">
          OmdbSearch
            </NavLink>
          </li>
          
           

        </ul>
      </div>
    </nav>
  )
}

