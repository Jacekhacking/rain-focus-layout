import React from 'react';

function NavItems() {
  return (
    <>
      <div className="pl-8">
        <h2> RainFocus Summit</h2>
        <p> Lehi, UT December 15th</p>
        <input
          className="nav-search-bar"
          type="text"
          id="navbar-search"
          placeholder="Search"
        />
      </div>

      <ul className=" nav-wrapper">
        <li></li>
        <p className="nav-item">Guide</p>
        <li>
          <p className="nav-item nav-active">Attendees</p>
          <ul className="sub-list">
            <li>Attendees</li>
            <li>Attendee types</li>
            <li>Packages</li>
            <li>Reg codes</li>
            <li>Discounts</li>
          </ul>
        </li>
        <li className="nav-item">Content</li>
        <li className="nav-item">Exhibitors</li>
      </ul>
    </>
  );
}

export default NavItems;
