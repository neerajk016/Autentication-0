
import React,{useEffect} from "react";
import {  Link,useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {



  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("check");
    navigate("/login")
  }



    const location=useLocation();
    useEffect(()=>{
        // console.log(location.pathname);
      },[location])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        {localStorage.getItem("check")?<>
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          </>:""}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {localStorage.getItem("check")?

              <><li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">
                    Home
                  </Link>
                </li><li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} `} to="/about">About</Link>
                  </li></>:""

              }
            </ul>


            {localStorage.getItem("token")?
                  <button className="btn btn-primary" onClick={handlelogout} type="submit">Logout </button>:
            
            <form className="d-flex">

            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">signup</Link>
              
            </form>}




            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;