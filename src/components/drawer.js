import drawer from "../img/drawers.jpg";

import React from "react";
import "../App.css";
import "../bootstrap-4.4.1.css";

function Drawer(props) {
  return (
    <div className="article-img">
      <img src={drawer} alt="" />
    </div>
  );
}

export { Drawer };
