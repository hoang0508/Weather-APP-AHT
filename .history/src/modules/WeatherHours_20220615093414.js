import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherHours = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.hourly) return;
  const dataTemp =
    weatherData?.hourly &&
    weatherData?.hourly.length > 0 &&
    weatherData?.hourly.map((item) => {
      return item?.temp;
    });

  console.log(
    "🚀 ~ file: WeatherHours.js ~ line 10 ~ WeatherHours ~ dataTemp",
    dataTemp
  );
  const dataFeel =
    weatherData?.hourly &&
    weatherData?.hourly.length > 0 &&
    weatherData?.hourly.map((item) => {
      return item?.feels_like;
    });

  const dataTime =
    weatherData?.hourly &&
    weatherData?.hourly.length > 0 &&
    weatherData?.hourly.map((item) => {
      return new Date(item?.dt * 1000).toLocaleDateString();
    });

  // const timerDt = new Date(data?.dt * 1000).toTimeString();
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Weather chart",
    },
    xAxis: {
      categories: dataTime,
    },
    series: [
      {
        name: "Temp",
        data: dataTemp,
      },
      {
        name: "Feels-like",
        data: dataFeel,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WeatherHours;
