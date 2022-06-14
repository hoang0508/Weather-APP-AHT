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
      return new Promise((resolve, reject) =>
     return    navigator.geolocation.getCurrentPosition())
      );
  },
};

export default WeatherApi;
