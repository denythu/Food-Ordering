import React from 'react';
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="max-width header">
        <img src=".\image\Food_Logo.png" alt="logo"  className="header-logo" />
        <div className="header-right">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <i class="fi fi-rr-marker absolute-center location-icon"></i>
                <input placeholder="Bangalore" className='input'/>
              </div>
              <i className="fi fi-rr-caret-down absolute-center"></i>
            </div> 
            <div className='location-search-separator'>
              <div className='header-searchBar'>
                <i className="fi fi-rr-search abolute-center search-icon"></i>
                <input placeholder="Search for restaurant, cuisine or a dish" className='search-input'/>
              </div>
            </div>
          </div>

          <div className='profile-wrapper'>
            <img src="./image/profile.png" alt="image" className="header-profile-image"/>
            <span className='header-username'>Densi</span>
            <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
          </div>
        </div>
    </div>
    </>
  );
};

export default Header;
