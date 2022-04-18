import React, { useEffect, useState } from 'react'
import MainPage from '../../components/mainPage/MainPage';
import useForecast from '../../hooks/useForecast';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentConditions, getDailyForcast } from '../actions';


const MainPageContainer = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.mainPage[0]);
    const favorites = useSelector((state) => state.favorites);
    const { locationCode } = useForecast();
    const [forecast, setForecast] = useState(null);
    const [text, setText] = useState("");

    const main = async () => {
        const curr = await getCurrentConditions(locationCode)
        const fc = await getDailyForcast(locationCode)
        setForecast(fc.payload.DailyForecasts)
        setText(fc.payload.Headline.Text)
        return dispatch(curr, fc);
    }

    useEffect(() => {
        main()
        console.log(favorites)
    }, [locationCode])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            {state && <MainPage
                favorites={state.favorites}
                locationCode={state.locationCode}
                setForecast={setForecast}
                setText={setText}
                city={state.city}
                forecast={forecast}
                text={text}
                WeatherText={state.WeatherText}
                date={state.date}
                temp={state.temp}
                icon={String(state.icon).length !== 2 ? `https://developer.accuweather.com/sites/default/files/0${state.icon}-s.png` : `https://developer.accuweather.com/sites/default/files/${state.icon}-s.png`}
            />}
        </>
    )
}

export default MainPageContainer;