import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Tirana</p>
                    <p className="weather-desc">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png"/>
            </div>
            <div className="bottom">
                <p className="temperature">35C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
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