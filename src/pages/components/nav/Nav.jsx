import './Nav.css'
import Logo from '../../../assets/images/icons/logo';

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

        <div className="menu-items">
        <a className='link link--1' href="#home">Home</a>
        <a className='link link--2' href="#projects">Project</a>
        <a className='link link--4' data="About" href="#about"> About</a>
        <a className='link link--4' data="CV" href="#curriculum">CV</a>
        <a className='link link--4' data="Contact" href="#footer">Contact</a>
        </div>
      </div>

      <Logo className='nav_logo'/>

     
    </nav>
  );
};

export default Nav;
