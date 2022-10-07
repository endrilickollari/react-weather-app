import "./current-weather.css";

const CurrentWeather = ({currentWeatherData}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{currentWeatherData.city}</p>
                    <p className="weather-desc">{currentWeatherData.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${currentWeatherData.weather[0].icon}.png`}/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(currentWeatherData.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(currentWeatherData.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{currentWeatherData.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{currentWeatherData.main.humidity} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{currentWeatherData.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;