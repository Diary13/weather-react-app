import { useEffect, useState } from "react";
import axios from "axios";

const useWeather = (city) => {
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

export default useWeather;