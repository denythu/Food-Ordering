import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="max-width header">
        <img src=".\image\Food_Logo.png" alt="logo"  className="header-logo" />
        <div className="header-left">
          <div className='header-location-search-container'>
            <div className='location-wrapper'>
              <div className='location-icon-name'>
              <img src=".\image\location.gif" />
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
};

export default Header;
