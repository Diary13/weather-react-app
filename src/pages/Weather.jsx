import '../styles/weather.scss';
import Header from '../components/Header';
import pont2 from '../assets/images/fond/pont2.jpg';
import SearchLocation from '../components/SearchLocation';
import TodayCard from '../components/TodayCard';
import CardWeather from '../components/CardWeather';
import Location from '../components/Location';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import {useWeather, useNextDayWeather } from '../hooks/useWeather';
import { generateDate } from '../utils/utils';

import 'swiper/css';
import 'swiper/css/navigation';

const Weather = () => {
    const [city, setCity] = useState('Antananarivo');
    const weatherInfo = useWeather(city);
    const otherDayWeatherInfo = useNextDayWeather();
   
    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const input = form.elements[0];
        setCity(input.value);
        if(input.value.trim()) form.reset();
    }
    
    return (
        <div className='main_container'>
            <div className='left_side'>
                <span className='logo'>Weather</span>
                { weatherInfo && <Location location = {{city: city, country: weatherInfo.sys.country}}/> }
                <img className='img_fond' src={pont2} alt="F4"/>
                <SearchLocation onSubmit={onSubmit}/>
                <div className='mask'>
                </div>
            </div>
            <div>
                <Header/>
                <div className='today'>
                    <h2>Today</h2>
                    {weatherInfo  && <TodayCard weatherInfo ={weatherInfo}/>}
                </div>
                <div className='daily'>
                    <h2>Daily</h2>
                    <div className='carousel'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={2}
                            navigation = {{nextEl:'.swiper-button-next',prevEl: '.swiper-button-prev'}}
                            style={{padding: '10px 20px 10px 25px', marginLeft: '-35px'}}
                            >
                                <div className='swiper-button-next'></div>
                                <div className='swiper-button-prev'></div>
                                {Array.from(Array(4).keys()).map((index) => {
                                    <SwiperSlide key={index}>
                                        <CardWeather info={{date: generateDate(index + 1), temp: Math.floor(Math.random() * 11) + 20}}/> 
                                    </SwiperSlide>
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;