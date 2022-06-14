import React from "react";
import { NavLink } from "react-router-dom";
const WeatherMenu = () => {
  return (
    <div className="weather-menu">
      <NavLink to="/week">Week</NavLink>
    </div>
  );
};

export default WeatherMenu;
