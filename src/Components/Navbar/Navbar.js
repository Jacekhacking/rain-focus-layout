// import '../../scss/Navbar.css';
import LeftNavbar from './LeftNavbar';
import RightNavbar from './RightNavbar';

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};

export default Navbar;
