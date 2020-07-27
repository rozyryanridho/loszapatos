import Link from 'next/link'
import artikel from '../dataset/data.json';
const Menu =() => {
  return(
  <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="images/loszapatos.png" width="112" height="28"/>
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
    <Link href="/">
      <a className="navbar-item">
        Home
      </a>
    </Link>
    
    <Link href="/par/man" as="/par/1">
      <a className="navbar-item">
          Man
      </a>
    </Link>

    <Link href="/par/woman" as="/par/2">
      <a className="navbar-item">
        Woman
      </a>
    </Link>
      
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Brand
        </a>

        <div className="navbar-dropdown">
          <Link href="/par/nike" as="/par/3">
          <a className="navbar-item">
            Nike
          </a>
          </Link>
          <Link href="/par/airjordan" as="/par/4">
          <a className="navbar-item">
            Air Jordan
          </a>
          </Link>
          <Link href="/par/adidas" as="/par/4">
          <a className="navbar-item">
            Adidas
          </a>
          </Link>
          
          
        </div>
      </div>
      <Link href="/bag"><a className="navbar-item">
      <i className="fa fa-shopping-cart"></i>
      </a></Link>
      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <Link href="../login"><a className="button is-grey-darker">
            Log in
          </a></Link>
          
        </div>
      </div>
    </div>
   </div>
</nav>)
}

export default Menu;