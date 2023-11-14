import '../styles/cardWeather.scss';

const CardWeather = () => {
    return (
        <div className="card_carousel">
            <h2 className='temperature'>20°C</h2>
            <div className="weather">
                <h2 className='typeWeather'>Storm rain</h2>
                <img src="./src/assets/images/storm-rain.png" alt="" />
            </div>
            <h3 className='date'>Tue 28, November 23</h3>
        </div>
    )
}

export default CardWeather;