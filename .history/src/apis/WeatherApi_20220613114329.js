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
    const cityName = await WeatherApi.GET_CITYNAME_BYlOCATION({
      lat: reponse?.data.lat,
      lon: reponse?.data.lon,
    });
    return {
      ...reponse.data,
      cityName,
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
  GET_CITYNAME_BYlOCATION: async (params) => {
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
};

export default WeatherApi;
