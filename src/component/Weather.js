import React, { useContext } from "react";
import { Storage } from "./Storage";
import Sunny from "./Sunny";
import classes from "./styles/Weather.module.css";
import Temp from "./Temp";
import Air from "./Air";
function Weather() {
  const detail = useContext(Storage);
  return (
    <div
      className={`${
        detail.data &&
        detail.data.current.condition.text.toLowerCase().includes("rain") &&
        `${classes.rain}`
      } ${
        detail.data &&
        detail.data.current.condition.text.toLowerCase().includes("mist") &&
        `${classes.mist}`
      } ${
        detail.data &&
        detail.data.current.condition.text.toLowerCase().includes("overcast") &&
        `${classes.overcast}`
      } ${
        detail.data &&
        detail.data.current.condition.text.toLowerCase().includes("cloudy") &&
        `${classes.cloudy}`
      } ${
        detail.data &&
        detail.data.current.condition.text.toLowerCase().includes("clear") &&
        `${classes.clear}`
      } ${
        detail.data &&
        detail.data.current.condition.text.toLowerCase().includes("sunny") &&
        `${classes.sun}`
      }`}
    >
      <div className={classes.weath}>
        <div>
          <input
            onChange={detail.cityInputHandler}
            placeholder="Enter City Name"
          />
        </div>
        <div>
          <h2>
            <p>{detail.data && detail.chkerror && detail.error}</p>
            {detail.data && detail.data.location.name},
            {detail.data && detail.data.location.country}
          </h2>
          <div className={classes.weatherimages}></div>
        </div>
        <div className={classes.body}>
          <Sunny />
          <div className={classes.tmpair}>
            <Temp />
            <Air />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
