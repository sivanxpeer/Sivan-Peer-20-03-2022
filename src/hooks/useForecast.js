import { useState } from "react";
import baseURL from "../apis/weatherApi";
import api from "../apis/weatherApi"

const useForecast = () => {
    const [forecast, setForecast] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const key = "cGVrCKM5Kpx3K0DCGjHlulQtEMEkacTy";

    const submitRequest = async (location) => {
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const res = await baseURL.get(`${proxy}locations/v1/cities/autocomplete?apikey=${key}&q=${location}`);
        return res;
    }
    const getDailyForcast = async () => {
        setisLoading(true);
        const response = await api.get(`daily/5day/215854?apikey=${key}`);
        setisLoading(false);
        const dailyData = response.data.DailyForecasts;
        const txt = response.data.Headline.Text;
        setMin(Math.floor(((dailyData[0].Temperature.Minimum.Value) - 32) * (5 / 9)));
        setMax(Math.floor(((dailyData[0].Temperature.Maximum.Value) - 32) * (5 / 9)));
        setForecast(dailyData);
        setText(txt);
        setCategory(response.data.Headline.Category);
    }

    return {
        forecast, setForecast, category, text, isLoading, min, max, submitRequest, getDailyForcast
    }
}

export default useForecast;