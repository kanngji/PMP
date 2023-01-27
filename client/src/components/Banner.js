import React from "react";
import runner from "../images/runner.png";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <h1 className="banner_first">IT</h1>
        <h1 className="banner_second">FRONT END</h1>
        <h1 className="banner_third">BACK END</h1>
        <h1 className="banner_fourth">DATA</h1>
        <h1 className="banner_fifth">NETWORK</h1>
        <h1 className="banner_sixth">Devops</h1>
        <div className="banner_img">
          <img src={runner} alt="banner_img"></img>
        </div>
      </div>
    </>
  );
}
