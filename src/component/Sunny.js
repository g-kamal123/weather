import React, { useContext } from "react";
import { Storage } from "./Storage";
import classes from "./styles/Sunny.module.css";

function Sunny() {
  const detail = useContext(Storage);
  const months = [
    "jan",
    "feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days =[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
  const b = detail.data && detail.data.location.localtime.split(" ");
  const a = detail.data && b[0].split("-");
  const d = detail.data && detail.data.current.is_day
  console.log(detail.data);
  return (
    <div className={classes.sunny1}>
      <div className={classes.today}>
        <p>
          <span>
            {days[Number(d)]}<br />
            {a[2]}
            {months[Number(a[1])]},{a[0]}
          </span>
          <img src={detail.data && detail.data.current.condition.icon} alt="" />
        </p>
        <h1>{detail.data && detail.data.current.condition.text}</h1>
      </div>
      <hr />
      <div className={classes.wind}>
        <p>
          <span>Wind</span>
          <b>{detail.data && detail.data.current.wind_kph} km/h</b>
        </p>
        <p>
          <span>Hum</span>
          <b>{detail.data && detail.data.current.humidity}%</b>
        </p>
        <p>
          <span>Pressure</span>
          <b>{detail.data && detail.data.current.pressure_mb} hpa</b>
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Sunny;
