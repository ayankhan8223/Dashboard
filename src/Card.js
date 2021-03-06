import React from "react";
import "./Card.css";

function Card({ img, name }) {
  return (
    <div>
      <div className="container1">
        <div className="card">
          <div className="imgBx">
            <img src={img} alt="" />
          </div>
          <div className="contentBx">
            <h2>{name}</h2>
            <div className="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
