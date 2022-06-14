import { Routes, Route } from "react-router-dom";
import WeatherToday from "./modules/WeatherToday";
import WeatherWeek from "./modules/WeatherWeek";
import WeatherApp from "./pages/weatherApp/WeatherApp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />}>
        <Route path="/week" element={<WeatherWeek />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
