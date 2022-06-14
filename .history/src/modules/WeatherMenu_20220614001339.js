import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const WeatherContentStyled = styled.div``;

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

const WeatherMenu = ({ children, ...props }) => {
  console.log(dataLink[0].title);
  return (
    <WeatherContentStyled>
      {dataLink &&
        dataLink.length > 0 &&
        dataLink.map((item) => (
          <NavLink to={item.to} key={item.id}>
            {item.title}
          </NavLink>
        ))}
    </WeatherContentStyled>
  );
};

export default WeatherMenu;
