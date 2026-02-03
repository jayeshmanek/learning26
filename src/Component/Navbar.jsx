import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      
      {/* Logo */}
      <NavLink className="navbar-brand fw-bold text-danger fs-4" to="/">
        NETFLIX
      </NavLink>

      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

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
           <NavLink className="nav-link" to="/netflixnews">
            News
          </NavLink>
          </li>


        </ul>
      </div>
    </nav>
  )
}
