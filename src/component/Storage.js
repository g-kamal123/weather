import React, { useState, useEffect } from "react";
import axios from "axios";
export const Storage = React.createContext();

export const Context = (props) => {
  const [city, setCity] = useState("lucknow");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [chkerror, setChkError] = useState(false);

  useEffect(() => {
    let res = setTimeout(async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json",
          {
            params: {
              q: city,
              key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setData(response.data);
        setChkError(false);
      } catch (err) {
        if (city !== "") setChkError(true);
        setError("city not found");
      }
    }, 400);
    return () => {
      clearTimeout(res);
    };
    // city==='' && setCity('lucknow')
  }, [city]);
  const cityInputHandler = (event) => {
    setCity(event.target.value);
    if (event.target.value === "") setChkError(false);
  };

  //   console.log(data);

  return (
    <Storage.Provider
      value={{
        cityInputHandler: cityInputHandler,
        error: error,
        chkerror: chkerror,
        data: data,
      }}
    >
      {props.children}
    </Storage.Provider>
  );
};
