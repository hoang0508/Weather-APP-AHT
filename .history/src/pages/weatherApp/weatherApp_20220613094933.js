import axios from "axios";
import React, { useEffect, useState } from "react";
import "./WeatherApp.scss";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState("");
  const [url, setUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=Thanh%20Hoa&appid=f8707b982d25b22bfae0bbc883a17961`
  );
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await axios.get(url);
      setWeatherData(reponse?.data);
    };
    fetchData();
  }, [url]);
  console.log(weatherData);
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
            <span>Date: </span>
            {new Date().toLocaleString()}
          </div>
          <div className="weather-national">
            <div className="weather-city">{weatherData?.name},</div>
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
