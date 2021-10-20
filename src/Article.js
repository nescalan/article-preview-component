import drawer from "./img/drawers.jpg";
import avatar from "./img/avatar-michelle.jpg";
import arrow from "./img/icon-share.svg";

import React from "react";
import "./App.css";
import "./bootstrap-4.4.1.css";

function Article() {
  return (
    <div className="article d-flex">
      <div className="article-img">
        <img src={drawer} alt="" />
      </div>
      <div className="article-text ">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="signature">
          <img src={avatar} alt="" className="signature-img" />
          <div className="signature-description">
            <span>Michelle Appleton</span>
            <p>28 jun 2020</p>
          </div>
          <div className="signature-arrow">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
