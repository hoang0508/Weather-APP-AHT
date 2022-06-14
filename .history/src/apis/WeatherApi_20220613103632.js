import axios from "axios";
import urls, { apiKey } from "./Urls";
const WeatherApi = {
  GET: async (params) => {
    const reponse = await axios.get(urls.weather, {
      params: {
        ...params,
        appid: apiKey,
        units: "matric",
      },
    });
    return reponse.data;
  },
};

export default WeatherApi;
