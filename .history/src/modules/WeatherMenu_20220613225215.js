import React from "react";
import { NavLink } from "react-router-dom";
const WeatherContent = () => {
  return (
    <div>
      <div className="weather-menu">
        <NavLink to="/week">Week</NavLink>
      </div>
    </div>
  );
};

export default WeatherContent;
