import NavItems from './NavItems';

function MobileNavPopOut({ mobileNavbarHandler }) {
  return (
    <>
      <nav className="mobile-nav-pop-out">
        <NavItems />
      </nav>
      <Backdrop mobileNavbarHandler={mobileNavbarHandler} />
    </>
  );
}

export default MobileNavPopOut;

export const Backdrop = ({ mobileNavbarHandler }) => {
  return (
    <>
      <div className="mobile-nav-backdrop" onClick={mobileNavbarHandler}></div>
    </>
  );
};
