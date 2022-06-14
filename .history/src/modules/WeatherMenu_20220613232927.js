import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WeatherToday from "./WeatherToday";
const WeatherContentStyled = styled.div`
  background-color: #ccc;
  width: 100%;
  padding: 10px;
`;

const dataLink = [
  {
    id: 1,
    to: "/",
    title: "Today",
  },
  {
    id: 2,
    to: "/",
    title: "Week",
  },
  {
    id: 3,
    to: "/",
    title: "Hours",
  },
];

const WeatherContent = ({ data, children, ...props }) => {
  return (
    <WeatherContentStyled>
      <div className="weather-menu">
        <NavLink to="/">Today</NavLink>
      </div>
      {children}
    </WeatherContentStyled>
  );
};

export default WeatherContent;
