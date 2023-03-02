// import '../../scss/Navbar.css';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import Shape from '../../images/CombinedShape.png';
import MobileNavPopOut from './MobileNavPopOut';
import { useState } from 'react';

const MobileNavbar = ({ mobileNavbarHandler, mobileNav }) => {
  let isHamburgerActive = mobileNav ? 'hamburger-active' : '';

  return (
    <nav className="mobile-nav">
      <nav onClick={mobileNavbarHandler}>
        <div className={`hamburger ${isHamburgerActive}`}>
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
  const [mobileNav, setMobileNav] = useState(true);
  const mobileNavbarHandler = (e) => {
    e.preventDefault();
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <MobileNavbar
        mobileNavbarHandler={mobileNavbarHandler}
        mobileNav={mobileNav}
      />
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
