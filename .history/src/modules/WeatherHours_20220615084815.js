import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const WeatherHours = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default WeatherHours;
