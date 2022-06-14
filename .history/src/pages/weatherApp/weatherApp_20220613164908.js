import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import WeatherApi from "../../apis/WeatherApi";
import "./WeatherApp.scss";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const currentPosition = await WeatherApi.GET_CURRENT_POSITION();
      const response = await WeatherApi.GET({
        lat: currentPosition.lat,
        lon: currentPosition.lon,
      });
      setWeatherData(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let position;
      if (query) {
        position = await WeatherApi.GET_LOC_BY_NAME(query);
      } else {
        position = await WeatherApi.GET_CURRENT_POSITION();
      }
      const response = await WeatherApi.GET({
        lat: position.lat,
        lon: position.lon,
      });
      setWeatherData(response);
    };
    fetchData();
  }, [query]);

  const handleSearchData = debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  return (
    <div
      className="weather"
      style={{ backgroundImage: 'url("./weather.jpg")' }}
    >
      <div className="weather-main">
        <h3 className="weather-heading">Weather App</h3>
        <div className="weather-search">
          <input
            type="text"
            className="weather-input"
            placeholder="Search..."
            onChange={(e) => handleSearchData(e)}
          />
        </div>
        <div className="weather-content">
          <div className="weather-date">
            <span>Date: {new Date().toLocaleString()} </span>
          </div>
          <div className="weather-national">
            <div className="weather-city">{weatherData?.national?.city},</div>
            <div className="weather-country">
              {weatherData?.national?.country}
            </div>
          </div>
          <div className="weather-forecast">
            <div className="weather-temp">
              <span className="weather-temp--number">
                {Math.trunc(weatherData?.current?.temp)}
              </span>
              <span>
                <sup>o</sup>C
              </span>
            </div>
            <div className="weather-image">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData?.current?.weather[0]?.icon}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="weather-menu"></div>
    </div>
  );
};

export default WeatherApp;
