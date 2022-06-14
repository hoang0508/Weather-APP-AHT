import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const WeatherContentStyled = styled.div`
  background-color: #ccc;
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
