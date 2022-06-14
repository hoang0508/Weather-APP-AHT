import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import timeConverter from "../Helper";

const WeatherDetailsStyle = styled.div`
  display: flex;
  align-items: center;
`;

const WeatherDetails = ({ data }) => {
  const { weatherData } = useWeatherContext();
  const dataItem = weatherData?.daily.find((item) => item.dt === data);
  return (
    <>
      <WeatherDetailsStyle>
        <div className="details-left">
          <div>
            {new Date(dataItem?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
            <span>{timeConverter(dataItem?.dt)}</span>
          </div>
        </div>
        <div className="details-right"></div>
      </WeatherDetailsStyle>
    </>
  );
};

export default WeatherDetails;
