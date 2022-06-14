import { Routes, Route } from "react-router-dom";
import WeatherApp from "./pages/weatherApp/WeatherApp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherApp />}></Route>
    </Routes>
  );
};

export default App;
