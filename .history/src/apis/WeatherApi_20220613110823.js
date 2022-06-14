import axios from "axios";
import urls, { apiKey } from "./Urls";
const WeatherApi = {
  GET: async (params) => {
    const reponse = await axios.get(urls.weather, {
      params: {
        ...params,
        units: "metric",
        appid: apiKey,
      },
    });
    return reponse.data;
  },
  GET_CURRENT_POSITION: () => {
    function getPosition(options) {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      );
    }
  },
};

export default WeatherApi;
