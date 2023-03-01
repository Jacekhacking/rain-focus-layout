// import '../../scss/Navbar.css';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <LeftNavbar />
      <RightNavbar />
    </nav>
  );
};

export default Navbar;
