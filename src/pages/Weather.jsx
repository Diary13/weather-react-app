import '../styles/weather.scss';
import Header from '../components/Header';
import pond1  from '../../public/fond/pond2.jpg';
import SearchLocation from '../components/SearchLocation';

const Weather = () => {
    return (
      
        <div className='main_container'>
            <div>
                <img src={pond1} alt="F4"/>
                <SearchLocation/>
                <div className='mask'>

                </div>
            </div>
            <div>
                <Header/>
            </div>
        </div>
    )
}

export default Weather;