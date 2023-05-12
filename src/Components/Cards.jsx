import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./Data";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img class="card-img-top" src={props.img} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              {props.card_content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
