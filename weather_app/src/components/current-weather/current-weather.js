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
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">40C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">40C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">40C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;