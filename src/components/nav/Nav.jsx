import './Nav.css'
import Logo from '../../assets/logo';

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
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#food-menu">CV</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
      </div>

      <Logo/>

     
    </nav>
  );
};

export default Nav;
