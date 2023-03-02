// import '../../scss/Navbar.css';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';
import Shape from '../../images/CombinedShape.png';

const MobileNavbar = () => {
  return (
    <nav className="mobile-nav">
      <img src={Shape} alt="" />
      <div className="hamburger">
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <nav className="navbar">
        <LeftNavbar />
        <RightNavbar />
      </nav>
    </>
  );
};

export default Navbar;
