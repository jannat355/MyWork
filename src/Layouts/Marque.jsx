import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const ADS = "YOU ORDER, WE DELIVER";
  return (
    <div>
      <Marquee speed={70} style={{ backgroundColor: "violet", height: "4rem" }}>
        <h1>
          {ADS} 
          <span style={{backgroundColor:"yellow" , borderTopRightRadius:30}}>FOR FREE🛒</span>
         
        </h1>
      </Marquee>
    </div>
  );
};

export default Marque;
