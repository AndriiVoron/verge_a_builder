import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const APPID = 'you need to do it yourself';
const getWeatherUrl = location => `https://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=${location}&units=metric`;

export function fetchWeather(location) {
    return {
        type: FETCH_WEATHER,
        payload: axios(getWeatherUrl(location))
    }
}