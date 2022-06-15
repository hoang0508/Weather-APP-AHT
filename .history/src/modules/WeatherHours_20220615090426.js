import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useWeatherContext } from "../context/WeatherProvider";

const WeatherHours = () => {
  const { weatherData } = useWeatherContext();
  const data =
    weatherData?.hourly &&
    weatherData?.hourly.length > 0 &&
    weatherData?.hourly.map((item) => item);
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Weather chart",
    },
    xAxis: {
      categories: [],
    },
    series: [
      {
        data: data?.temp,
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
