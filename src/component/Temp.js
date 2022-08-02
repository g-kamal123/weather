import React, { useContext } from "react";
import { Storage } from "./Storage";
import classes from "./styles/Temp.module.css";

function Temp() {
  const detail = useContext(Storage);
  return (
    <div className={classes.temp}>
      <p>
        <b>Temp.</b>
        <span>{detail.data && detail.data.current.temp_c}*C</span>
      </p>
      <hr />
    </div>
  );
}

export default Temp;
