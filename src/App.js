import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import {WEATHER_API_URL, WEATHER_API_KEY} from "./api";
import {useState} from "react";
import Forecast from "./components/forecast/forecast";

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, long] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);
        const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);
        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const currentWeatherResponse = await response[0].json();
                const forecastWeatherResponse = await response[1].json();
                setCurrentWeather({
                    city: searchData.label,
                    ...currentWeatherResponse
                });
                setForecastWeather({
                    city: searchData.label,
                    ...forecastWeatherResponse
                });
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange}/>
            {currentWeather && <CurrentWeather currentWeatherData={currentWeather}/>}
            {forecastWeather && <Forecast forecastData={forecastWeather}/>}
        </div>
    );
}

export default App;
