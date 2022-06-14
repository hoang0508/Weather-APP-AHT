import React from "react";
import "./WeatherApp.scss";
const WeatherApp = () => {
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
          />
        </div>
        <div className="weather-content">
          <div className="weather-date">
            <span>Date: </span>9:04
          </div>
          <div className="weather-national">
            <div className="weather-city">Hanoi,</div>
            <div className="weather-country">VN</div>
          </div>
          <div className="weather-forecast">
            <div className="weather-temp">
              <span className="weather-temp--number">30</span>
              <span>
                <sup>o</sup>C
              </span>
            </div>
            <div className="weather-image">
              <img src="./clear.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
