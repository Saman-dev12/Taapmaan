import React, { useState } from "react";
import Data from "../components/Data";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import "./Home.css";

const Home = () => {
  const [place, setPlace] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    place_name: "",
    description: "",
    temperature_C: 0,
    country_name: "",
    iconURL: "",
  });

  const handleChange = (e) => {
    setPlace(e.target.value);
    // console.log(place);
  };

  const handleClick = async (e) => {
    await e.preventDefault();
    if (!place) {
      console.log("Please enter a city or state name for weather");
      setError("Please enter a city,state,country name for weather");
      return;
    }

    setError("");

    try {
      setIsLoading(true);

      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metrics
        &appid=${import.meta.env.VITE_API_KEY}`
      );
      let data = await response.json();
      // console.log(data);
      setData({
        place_name: data.name,
        description: data.weather[0].description,
        temperature_C: Math.round(data.main.temp - 273.15),
        country_name: data.sys.country,
        iconURL: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    } catch (err) {
      setError("Place not found!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="home">
        <h1>Search here to know the taapmaan</h1>
        <div className="search">
          <div className="search-bar">
            <input
              type="text"
              id="place"
              onChange={handleChange}
              value={place}
              placeholder="Search place"
            />
          </div>
          <div className="search-submit">
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <div className="loading">{isLoading && <Spinner />}</div> */}
      <div className="result">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Error message={error} />
        ) : data.place_name ? (
          <Data data={data} />
        ) : null}
      </div>
    </>
  );
};

export default Home;
