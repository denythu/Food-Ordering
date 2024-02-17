import React from 'react';
import "./tabOption.css";

const tabs=[
  {
    id:1,
    name:"Delivery",
    active_img:"./image/Delivery_active_img.avif",
    backdrop:"FCEEC0",
    inactive_img:"./image/Delivery_inactive_img.webp",
  },

  {
    id:2,
    name:"Diling Out",
    active_img:"./image/Diving Out_active_img.avif",
    backdrop:"E5F3F3",
    inactive_img:"./image/Diving Out_inactive_img.avif",
  },

  {
    id:3,
    name:"Nightlife",
    active_img:"./image/Nightlife_active_img.webp",
    backdrop:"EDf4FF",
    inactive_img:"./image/Nightlife_inactive_img.webp",
  },
];

const TabOption = ({ activeTab, setActiveTab}) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab)=>{
          return (
            <>
              <div onClick={() => setActiveTab(tab.name)} className={`tab-item absolute-center cur-po ${activeTab===tab.name && "active-tab"}`}>
                <div className="tab-image-container absolute-center" style={{backgroundColor: `${activeTab === tab.name ? tab.backdrop : "" }`,}}>
                  <img className="tab-image" alt={tab.name} src={ activeTab===tab.name ? tab.active_img:tab.inactive_img}/>
                </div>
                <div className="tab-name">{tab.name}</div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default TabOption;
