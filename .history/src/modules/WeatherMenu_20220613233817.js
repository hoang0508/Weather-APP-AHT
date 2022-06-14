import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WeatherToday from "./WeatherToday";
import WeatherWeek from "./WeatherWeek";
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
    to: "/week",
    title: "Week",
  },
  {
    id: 3,
    to: "/hours",
    title: "Hours",
  },
];

const WeatherContent = ({ data, children, ...props }) => {
  console.log(dataLink[0].title);
  return (
    <WeatherContentStyled>
      <div className="weather-menu">
        {dataLink &&
          dataLink.length > 0 &&
          dataLink.map((item) => (
            <NavLink to={item.to} key={item.id}>
              {item.title}
            </NavLink>
          ))}
      </div>
      {dataLink[0].title === "Today" && <WeatherToday />}
      {dataLink[1].title === "Week" && <WeatherWeek />}
    </WeatherContentStyled>
  );
};

export default WeatherContent;
