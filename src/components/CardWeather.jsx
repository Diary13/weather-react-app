import '../styles/cardWeather.scss';

const CardWeather = ({info}) => {
    console.log("kivy: " ,info);
    return (
        <div className="card_carousel">
            <h2 className='temperature'>{info.temp}°C</h2>
            <div className="weather">
                <h2 className='typeWeather'>Storm rain</h2>
                <img src="./src/assets/images/storm-rain.png" alt="" />
            </div>
            <h3 className='date'>{info.date}</h3>
        </div>
    )
}

export default CardWeather;