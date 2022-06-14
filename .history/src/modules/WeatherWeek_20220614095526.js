import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherWeekStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  .weather-week--info {
    background-color: #fff;
    padding: 5px;
    border-radius: 3px;
  }
`;

const WeatherWeek = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.daily) return;
  console.log(weatherData?.daily);
  const data = weatherData?.daily;
  return (
    <WeatherWeekStyles>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div className="weather-week--info" key={item?.dt}>
            <h3 className="weather-week--days">
              {new Date(item?.dt).getDate()}, 13/6
            </h3>
            <div className="weather-week--image">
              <img src="" alt="" />
            </div>
            <div className="weather-weeek--temp">
              <span>
                25.2<sup>o</sup>C
              </span>
              <span>
                33.62<sup>o</sup>C
              </span>
            </div>
          </div>
        ))}
    </WeatherWeekStyles>
  );
};

export default WeatherWeek;
