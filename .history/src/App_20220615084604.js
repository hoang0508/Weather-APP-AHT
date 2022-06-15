import { Routes, Route } from "react-router-dom";
import { WeatherProvider } from "./context/WeatherProvider";
import WeatherHours from "./modules/WeatherHours";
import WeatherToday from "./modules/WeatherToday";
import WeatherWeek from "./modules/WeatherWeek";
import WeatherApp from "./pages/weatherApp/WeatherApp";

const App = () => {
  return (
    <WeatherProvider>
      <Routes>
        <Route path="/" element={<WeatherApp />}>
          <Route path="/" element={<WeatherToday />}></Route>
          <Route path="/week" element={<WeatherWeek />}></Route>
          <Route path="/hours" element={<WeatherHours />}></Route>
        </Route>
      </Routes>
    </WeatherProvider>
  );
};

export default App;
