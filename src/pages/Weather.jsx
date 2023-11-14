import '../styles/weather.scss';
import Header from '../components/Header';
import pond1  from '../../public/fond/pond2.jpg';
import SearchLocation from '../components/SearchLocation';
import TodayCard from '../components/TodayCard';
import CardWeather from '../components/CardWeather';
import Carousel from '../components/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Weather = () => {
    const images = [
        '../../public/fond/pond1.jpg',
        '../../public/fond/pond2.jpg',
        '../../public/fond/pond3.jpg',
      ];

    return (
      
        <div className='main_container'>
            <div>
                <img className='img_fond' src={pond1} alt="F4"/>
                <SearchLocation/>
                <div className='mask'>
                </div>
            </div>
            <div>
                <Header/>
                <div className='today'>
                    <h2>Today</h2>
                    <TodayCard/>
                </div>
                <div className='daily'>
                    <h2>Daily</h2>
                    <div className='carousel'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={2}
                            navigation = {{nextEl:'.swiper-button-next',prevEl: '.swiper-button-prev'}}
                            style={{padding: '10px 20px 10px 25px'}}
                            >
                                <div className='swiper-button-next'></div>
                                <div className='swiper-button-prev'></div>
                            <SwiperSlide><CardWeather/></SwiperSlide>
                            <SwiperSlide><CardWeather/></SwiperSlide>
                            <SwiperSlide><CardWeather/></SwiperSlide>
                            <SwiperSlide><CardWeather/></SwiperSlide>
                            <SwiperSlide><CardWeather/></SwiperSlide>
                            <SwiperSlide><CardWeather/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;