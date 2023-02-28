import Icon from '../../images/Icon.png';
import Shape from '../../images/CombinedShape.png';

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="">
        <img src={Shape} alt="" />
        <img src={Icon} alt="Icon" />
      </div>
      <img src={Icon} alt="Icon" />
    </div>
  );
};

export default LeftNavbar;
