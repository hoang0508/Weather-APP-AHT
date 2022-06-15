import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherHours = () => {
  const { weatherData } = useWeatherContext();
  if (!weatherData?.hourly) return;
  const data =
    weatherData?.hourly &&
    weatherData?.hourly.length > 0 &&
    weatherData?.hourly.map((item) => {
      return {
        temp: item?.temp,
        feel_like: item?.feels_like,
      };
    });

  console.log(
    "🚀 ~ file: WeatherHours.js ~ line 10 ~ WeatherHours ~ data",
    data
  );

  const timerDt = new Date(data?.dt * 1000).toTimeString();
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Weather chart",
    },
    xAxis: {
      categories: timerDt,
    },
    series: [
      {
        data: [data?.temp],
      },
      {
        data: data?.feel_like,
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
