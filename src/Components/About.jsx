import React from "react";
import Common from "./Common";
import aboutImg from './about_img.gif'
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - TwinCode";
  }, []);
  return (
    <>
      <Common
        name="About"
        sentence_p="We provide our customers with the most advanced and tech-savvy software solutions available. We are not only recognized for our expertise but also for our family-like atmosphere where talented experts work together to provide innovative solutions."
        btn_text="Contact us"
        back_img={aboutImg}
        url = "/contact"
      />
    </>
  );
};

export default About;
