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
    weatherData?.hourly.map((item) => item);

  console.log(
    "🚀 ~ file: WeatherHours.js ~ line 9 ~ WeatherHours ~ data",
    data
  );
  const timerDt = new Date(data?.dt * 1000).toTimeString();
  console.log(
    "🚀 ~ file: WeatherHours.js ~ line 15 ~ WeatherHours ~ timerDt",
    timerDt
  );
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
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WeatherHours;
