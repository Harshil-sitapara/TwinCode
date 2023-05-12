import React from "react";

const Footer = () => {
    const cyear=new Date().getFullYear()
  return (
    <>
      <footer className="mt-5 text-center">
        <p className="pt-5">@ {cyear} TwinCode. All Right Reserved |  Terms and Conditions</p>
      </footer>
    </>
  );
};


export default Footer