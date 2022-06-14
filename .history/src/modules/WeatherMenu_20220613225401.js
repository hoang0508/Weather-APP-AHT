import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const WeatherContentStyled = styled`
  background-color: #fff;
`;
const WeatherContent = () => {
  return (
    <WeatherContentStyled>
      <div className="weather-menu">
        <NavLink to="/week">Week</NavLink>
      </div>
    </WeatherContentStyled>
  );
};

export default WeatherContent;
