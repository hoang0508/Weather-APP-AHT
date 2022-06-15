import { debounce } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import WeatherApi from "../apis/WeatherApi";

const WeatherContext = createContext();

const WeatherProvider = ({ children, ...props }) => {
  const [weatherData, setWeatherData] = useState("");
  const [query, setQuery] = useState();
  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
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
        // toast.success("Weather successfully!");
        setWeatherData(response);
      } catch (error) {
        toast.error("Error!!");
      }
    };
    fetchData();
  }, [query]);
  const handleSearchData = debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  const values = {
    weatherData,
    handleSearchData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (typeof context === "undefined") throw new Error("Invalid Provider");
  return context;
}

export { useWeatherContext, WeatherProvider };
