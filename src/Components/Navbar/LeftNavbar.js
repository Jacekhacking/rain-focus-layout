import Icon from '../../images/Icon.png';
import Shape from '../../images/CombinedShape.png';

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <div className="flex-center flex-col">
        <img src={Shape} alt="" />
        <img src={Icon} alt="Icon" />
      </div>
      <img src={Icon} alt="Icon" />
    </div>
  );
};

export default LeftNavbar;
