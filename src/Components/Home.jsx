import React from "react";
import interaction_design from "./Interaction_Design.gif";
import {useEffect} from 'react' 
import Common from "./Common";

const Home = () => {
  useEffect(() => {
    document.title = "Home - TwinCode";
  }, []);
  return (
    <>
      <Common
        name="Grow your business with"
        sentence="We turn your digital dreams into a reality"
        btn_text="Get started"
        back_img={interaction_design}
        url="/service"
      />
    </>
  );
};

export default Home;
