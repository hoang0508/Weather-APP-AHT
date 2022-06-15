import React from "react";
import styled from "styled-components";
import timeConverter from "../Helper";

const WeatherDetailsStyle = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  .details-left,
  .details-right {
    width: 50%;
  }
  .details-info {
    display: flex;
    align-items: baseline;
    gap: 0 10px;
    margin-bottom: 10px;
  }
  .info-name {
    color: #000;
    font-weight: 500;
    font-size: 17px;
  }
`;

const WeatherDetails = ({ data }) => {
  return (
    <>
      <WeatherDetailsStyle>
        <div className="details-left">
          <div className="details-info">
            {new Date(data?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
            <span>{timeConverter(data?.dt)}</span>
          </div>
          <div className="details-info">
            <div className="info-name">Temperature:</div>
            <div>
              <span>
                {Math.floor(data?.temp?.min)}
                <sup>o</sup>C
              </span>
              -
              <span>
                {Math.floor(data?.temp?.max)}
                <sup>o</sup>C
              </span>
            </div>
          </div>
          <div className="details-info">
            <div className="info-name">Rain:</div>
            <div>{data?.rain} mml</div>
          </div>
          <div className="details-info">
            <div className="info-name">Humidity:</div>
            <div>{data?.humidity} %</div>
          </div>
          <div className="details-info">
            <div className="info-name">Wind speed:</div>
            <div>{data?.wind_speed} km/h</div>
          </div>
        </div>
        <div className="details-right">
          <div className="details-info">
            <div className="info-name">Sunrice:</div>
            <div>{new Date(data?.sunrise * 1000).toLocaleTimeString()}</div>
          </div>
          <div className="details-info">
            <div className="info-name">Sunset:</div>
            <div>{new Date(data?.sunset * 1000).toLocaleTimeString()}</div>
          </div>
          <div className="details-info">
            <div className="info-name">Description:</div>
            <div>{data?.weather[0]?.description}</div>
          </div>
          <div className="details-info">
            <div className="info-name">Pressure:</div>
            <div>{data?.pressure} hPa</div>
          </div>
        </div>
      </WeatherDetailsStyle>
    </>
  );
};

export default WeatherDetails;
