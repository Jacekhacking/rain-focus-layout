// import '../../scss/Navbar.css';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import Shape from '../../images/CombinedShape.png';
import MobileNavPopOut from './MobileNavPopOut';
import { useState } from 'react';

const MobileNavbar = ({ mobileNavbarHandler }) => {
  return (
    <nav className="mobile-nav">
      <nav onClick={mobileNavbarHandler}>
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </nav>
      <img src={Shape} alt="" />
    </nav>
  );
};

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavbarHandler = (e) => {
    e.preventDefault();
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <MobileNavbar mobileNavbarHandler={mobileNavbarHandler} />
      {mobileNav && (
        <MobileNavPopOut mobileNavbarHandler={mobileNavbarHandler} />
      )}
      <nav className="navbar">
        <LeftNavbar />
        <RightNavbar />
      </nav>
    </>
  );
};

export default Navbar;
