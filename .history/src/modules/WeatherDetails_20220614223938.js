import React from "react";
import styled from "styled-components";
import timeConverter from "../Helper";

const WeatherDetailsStyle = styled.div`
  margin-top: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .details-left {
    &--info {
      display: flex;
      align-items: center;
      gap: 0 10px;
    }
  }
`;

const WeatherDetails = ({ data }) => {
  return (
    <>
      <WeatherDetailsStyle>
        <div className="details-left">
          <div className="details-left--info">
            {new Date(data?.dt * 1000).toLocaleDateString("vi-VN")},{" "}
            <span>{timeConverter(data?.dt)}</span>
          </div>
          <div className="details-left--info">
            <span>Temperature:</span>
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
        </div>
        <div className="details-right"></div>
      </WeatherDetailsStyle>
    </>
  );
};

export default WeatherDetails;
