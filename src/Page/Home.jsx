import React from "react";
import WinterServices from "../Components/WinterServices";
import WinterTips from "../Components/WinterTips";
import ExpertVets from "../Components/ExpertVets";
import PetAccessories from "../Components/PetAccessories";

const Home = () => {
  return (
    <div className="space-y-16">
      <WinterServices />
      <WinterTips></WinterTips>

      <PetAccessories></PetAccessories>
      <ExpertVets></ExpertVets>
      
    </div>
  );
};

export default Home;
