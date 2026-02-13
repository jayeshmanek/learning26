import { NavLink } from "react-router-dom"

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

          <li className="nav-item">
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
          </li>


        


        </ul>
      </div>
    </nav>
  )
}
