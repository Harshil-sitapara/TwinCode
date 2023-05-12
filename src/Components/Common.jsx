import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto mt-5 home_main">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1 className="pt-4">
                    {props.name}
                    <strong> TwinCode</strong>
                  </h1>
                  <h2>{props.sentence}</h2>
                  <p>{props.sentence_p}</p>
                  <div className="mt-3">
                    <NavLink to={props.url}>
                      <input
                        type="button"
                        className="btn btn-outline-primary mt-3 px-4 contact_btn"
                        value={props.btn_text}
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header_img">
                  <img src={props.back_img} className="img-fluid animate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
