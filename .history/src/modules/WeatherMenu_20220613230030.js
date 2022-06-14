import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WeatherWeek from "./WeatherWeek";
const WeatherContentStyled = styled.div`
  background-color: #ccc;
  width: 100%;
  padding: 10px;
`;
const WeatherContent = () => {
  return (
    <WeatherContentStyled>
      <div className="weather-menu">
        <NavLink to="/">Week</NavLink>
      </div>
      <WeatherWeek />
    </WeatherContentStyled>
  );
};

export default WeatherContent;
