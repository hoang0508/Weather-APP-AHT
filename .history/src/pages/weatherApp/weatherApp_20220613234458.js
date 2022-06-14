import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import WeatherMain from "../../modules/WeatherMain";
import WeatherApi from "../../apis/WeatherApi";
import "./WeatherApp.scss";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState("");
  const [query, setQuery] = useState();
  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      let position;
      if (query) {
        position = await WeatherApi.GET_LOC_BY_NAME({ q: query });
      } else {
        position = await WeatherApi.GET_CURRENT_POSITION();
      }
      const response = await WeatherApi.GET({
        lat: position.lat,
        lon: position.lon,
      });
      setWeatherData(response);
    };
    fetchData();
  }, [query]);

  const handleSearchData = debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  return (
    <div
      className="weather"
      style={{ backgroundImage: 'url("./weather.jpg")' }}
    >
      <WeatherMain data={weatherData} onChange={handleSearchData} />
    </div>
  );
};

export default WeatherApp;
