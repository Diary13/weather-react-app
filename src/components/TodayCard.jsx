import '../styles/todayCard.scss';

const TodayCard = ()=> {
    return (
        <div className="card">
            <div className='info'>
                <h2 className='temperature'>20°C</h2>
                <div className="weather">
                    <h2 className='typeWeather'>Storm rain</h2>
                    <img src="./src/assets/images/storm-rain.png" alt="" />
                </div>
                <h3 className='date'>Tue 28, November 23</h3>
            </div>
            <div className='details'>
                <p><label>RealFeal: </label><span> 37°</span></p>
                <p><label>Humidity: </label><span> 60%</span></p>
                <p><label>UV Index: </label><span> 0 Low</span></p>
                <p><label>Cloud cover: </label><span> 45%</span></p>
                <p><label>Visibility: </label><span> 5 Km</span></p>
            </div>
        </div>
    )
}

export default TodayCard;