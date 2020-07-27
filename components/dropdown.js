const Dropdown=()=>{
    return(
        <nav className="navbar nav-drop" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Color
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            Black
          </a>
          <a className="navbar-item">
            Red
          </a>
          <a className="navbar-item">
            Blue
          </a>
        </div>
      </div>
    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Size
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            12
          </a>
          <a className="navbar-item">
            13
          </a>
          <a className="navbar-item">
            14
          </a>
        </div>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Sort By
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            Price (Low-Hight)
          </a>
          <a className="navbar-item">
            Newest
          </a>
          <a className="navbar-item">
            Top Sellers
          </a>
        </div>
      </div>
    </div>
   </div>
</nav>
    )
}

export default Dropdown;