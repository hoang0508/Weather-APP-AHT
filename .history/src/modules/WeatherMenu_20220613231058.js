import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WeatherToday from "./WeatherToday";
const WeatherContentStyled = styled.div`
  background-color: #ccc;
  width: 100%;
  padding: 10px;
`;
const WeatherContent = () => {
  return (
    <WeatherContentStyled>
      <div className="weather-menu">
        <NavLink to="/">Today</NavLink>
      </div>
      <WeatherToday />
    </WeatherContentStyled>
  );
};

export default WeatherContent;
