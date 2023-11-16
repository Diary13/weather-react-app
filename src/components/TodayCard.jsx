import '../styles/todayCard.scss';
import {weatherImg} from '../utils/utils';

const TodayCard = ({weatherInfo}) => {
    //T kelvin = T deg + 273

    const now = new Date();
    
    return (
        <div className="card">
            <div className='info'>
                <h2 className='temperature'>{(weatherInfo.main.temp - 273).toFixed(1) }°C</h2>
                <div className="weather">
                   <h2 className='typeWeather'>{weatherInfo.weather[0].main }</h2>
                    <img src={weatherImg[(weatherInfo.weather[0].main).toLowerCase()]} alt="F4" />
                </div>
                <h3 className='date'>{now.toDateString()}</h3>
            </div>
            <div className='details'>
                <p><label>Temp max: </label><span>{(weatherInfo.main.temp_max - 273).toFixed(1)}°C</span></p>
                <p><label>Temp min: </label><span>{(weatherInfo.main.temp_min - 273).toFixed(1)}°C</span></p>
                <p><label>Humidity: </label><span> {weatherInfo.main.humidity}%</span></p>
                <p><label>Cloud cover: </label><span> {weatherInfo.clouds.all}%</span></p>
                <p><label>Visibility: </label><span> {weatherInfo.visibility} m</span></p>
            </div>
        </div>
    )
}

export default TodayCard;