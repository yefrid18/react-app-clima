import { useEffect, useState } from "react";
import { getWeatherByCoords } from "./api/fetchWeather";
import { WeatherContainer } from "./components/WeatherContainer";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);


      } catch (err) {
        setError("Error de Localización - Revise su conexión a internet");
      }
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </div>
  );
}

export default App;
