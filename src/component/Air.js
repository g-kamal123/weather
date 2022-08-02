import React from "react";
import classes from "./styles/Air.module.css";

function Air() {
  return (
    <div className={classes.air}>
      <p>Air Quality</p>
      <h1>55</h1>
      <span>Moderate</span>
      <hr />
    </div>
  );
}

export default Air;
