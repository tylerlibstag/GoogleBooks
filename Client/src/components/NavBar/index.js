import React from "react";



function NavBar() {
    return <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <a className="navbar-brand" href="/search">Home</a>
      <a className="navbar-brand" href="/saved">Saved</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"> </li>
          <li className="nav-brand"></li>
        </ul>
      </div>
    </nav>

  </div>
}

export default NavBar;