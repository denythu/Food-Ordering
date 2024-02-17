import React, { useState } from 'react';
import TabOption from '../components/common/tabOptions/tabOption';
import Footer from '../components/common/footer/footer';
import Header from '../components/common/header/header';
import Delivery from '../components/delivery/delivery';
import DiningOut from '../components/diningOut/diningOut';
import Nightlife from '../components/nightlife/nightlife';

const Home = () => {

  const [activeTab, setActiveTab]= useState("Delivery")


  return (
    <div>
      <Header />
      <TabOption activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer /> 
    </div>
  );
};

const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Nightlife":
      return <Nightlife />
      default:
        return <Delivery />
  
}
};

export default Home;