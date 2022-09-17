import { FormEvent, useEffect, useState } from "react";
import { getWeatherByCoords, getWeatherBySearch } from "./api/fetchWeather";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer";
import {Footer} from "./components/Footer"

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

  //Buscador
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");

    try {
      const data = await getWeatherBySearch(CITY);

      if (data === "404"){
        setError("No se encontró la ciudad")
      }else if (data === "400"){
        setError("Por favor escriba una ciudad")
      }else {
        setFetchedData(data)
      }
      
    } catch (err) {
       setError("Error de Localización - Revise su conexión a internet")
    }
  }


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchedData={fetchedData} error={error} />
      <Footer />
    </div>
  );
}

export default App;
