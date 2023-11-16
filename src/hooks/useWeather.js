import { useEffect, useState } from "react";
import axios from "axios";
import { generateDate } from '../utils/utils';

export const useWeather = (city) => {
    const [weatherValue, setWeatherValue] = useState();
    useEffect(() => {
        const fetchData = async()=> {
            try {
                const result = await axios.get(`${import.meta.env.VITE_API_URL}/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`);
                setWeatherValue(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [city]);
    return weatherValue;
}

export const useNextDayWeather = () => {
    const [weatherNextDayInfo, setWeatherNextDayInfo] = useState([]);
    const otherDay = [];
    useEffect(() => {
        const kivy = async () => {
            for (let i = 0; i < 4; i++) {
                let item = {
                    date: generateDate(i),
                    temp: (Math.floor(Math.random() * 11) + 20) // [20 - 30]
                }
                otherDay.push(item);
            }
            return otherDay;
        }
        kivy().then((res)=> {
            console.log("res: ", res);
            setWeatherNextDayInfo(res);
        })
    },[]);
    return weatherNextDayInfo;
}