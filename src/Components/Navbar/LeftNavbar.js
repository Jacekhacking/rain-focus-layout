import Icon from '../../images/Icon.svg';
import NavLogo from '../../images/NavLogo.svg';
import UserIcon from '../../images/UserIcon.svg';

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="flex-center flex-col">
        <img src={NavLogo} alt="nav-logo" className="nav-logo" />
        <img src={Icon} alt="Icon" className="nav-icon" />
      </div>
      <img src={UserIcon} alt="Icon" className="nav-icon" />
    </div>
  );
};

export default LeftNavbar;
