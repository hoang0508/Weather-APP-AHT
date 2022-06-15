import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherHours = () => {
  const { weatherData } = useWeatherContext();
  console.log(
    "🚀 ~ file: WeatherHours.js ~ line 8 ~ WeatherHours ~ weatherData",
    weatherData
  );
  const data =
    weatherData?.hourly &&
    weatherData?.hourly.length > 0 &&
    weatherData?.hourly.map((item) => item.temp);
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Weather chart",
    },
    series: [
      {
        data: [data],
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
