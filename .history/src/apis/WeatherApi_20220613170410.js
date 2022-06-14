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
    const national = await WeatherApi.GET_NATIONAL_BYlOCATION({
      lat: reponse?.data.lat,
      lon: reponse?.data.lon,
    });
    return {
      ...reponse.data,
      national,
    };
  },
  GET_CURRENT_POSITION: () => {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      })
    );
  },
  GET_NATIONAL_BYlOCATION: async (params) => {
    const response = await axios.get(urls.city, {
      params: {
        ...params,
        appid: apiKey,
      },
    });
    return {
      city:
        response?.data?.[0]?.local_names?.vi ||
        response?.data?.[0]?.local_names?.en,
      country: response?.data?.[0]?.country,
    };
  },
  GET_LOC_BY_NAME: async (params) => {
    const response = await axios.get(urls.direct);
    console.log(
      "🚀 ~ file: WeatherApi.js ~ line 52 ~ GET_LOC_BY_NAME: ~ response",
      response
    );
    return {
      lat: response?.data?.lat,
      lon: response?.data?.lon,
    };
  },
};

export default WeatherApi;
