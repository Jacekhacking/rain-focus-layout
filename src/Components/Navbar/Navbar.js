// import '../../scss/Navbar.css';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import NavLogo from '../../images/NavLogo.svg';
import MobileNavPopOut from './MobileNavPopOut';
import { useState, useEffect } from 'react';

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
      <img src={NavLogo} alt="navigation logo" />
    </nav>
  );
};

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMobileNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
