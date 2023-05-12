import React from "react";
import Card from "./Cards";
import Data from "./Data";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    document.title = "Service - RIPPLESTACKS";
  }, []);
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Agile Software Development Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="row gy-4">
              {Data.map((cval, index) => {
                return (
                  <Card
                    key={index}
                    title={cval.title}
                    img={cval.img}
                    card_content={cval.card_contant}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
