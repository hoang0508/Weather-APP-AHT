import axios from "axios";
import urls, { apiKey } from "./Urls";
const WeatherApi = {
  GET: async (param) => {
    const reponse = await axios.get(urls.weather, {
      params: {
        ...param,
        appid: apiKey,
        units: "metric",
      },
    });
    return reponse.data;
  },
};

export default WeatherApi;
