import React from "react";

const WeatherApp = () => {
  return (
    <div
      className="weather"
      style={{ backgroundImage: 'url("./weather.jpg")' }}
    >
      <div className="weather-main">
        <div className="weather-search">
          <input type="text" className="weather-input" />
        </div>
        <div className="weather-content">
          <div className="weather-date">
            <span>Date: </span>9:04
          </div>
          <div className="weather-temp">
            <div className="weather-temp--number">30</div>
            <span>
              <sup>o</sup>C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
