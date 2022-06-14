import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherProvider";
import timeConverter from "../Helper";

const WeatherDetailsStyle = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const WeatherDetails = ({ data }) => {
  console.log(
    "🚀 ~ file: WeatherDetails.js ~ line 15 ~ WeatherDetails ~ data",
    data
  );
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
