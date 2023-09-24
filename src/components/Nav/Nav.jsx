import './Nav.css'

function Nav() {
    
  return (
    <nav className="navbar">

      <div className="navbar-container container">
        <input type="checkbox" name="" id=""></input>
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#food">Project</a>
          </li>
          <li>
            <a href="#food-menu">CV</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="logo">iDavid80</p>
      </div>
    </nav>
  );
};

export default Nav;
