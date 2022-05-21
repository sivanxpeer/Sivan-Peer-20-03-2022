import React, { useEffect } from 'react'
import MainPage from '../../components/mainPage/MainPage';
import useForecast from '../../hooks/useForecast';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentConditions, getDailyForcast } from '../actions';


const MainPageContainer = () => {
    const dispatch = useDispatch();

    const mainPageState = useSelector((state) => state.mainPage);
    const current = useSelector((state) => state.currentConditionsReducer.currentCondition)
    const forecast = useSelector((state) => state.dailyForecastReducer)
    // console.log(mainPageState);
    // console.log("current",current);
    // console.log(forecast);


    // const favorites = useSelector((state) => state.favorites);
    const { locationCode } = useForecast();

    const main = async () => {
        dispatch(getCurrentConditions(locationCode));
        console.log(mainPageState);
        dispatch(getDailyForcast(locationCode))
    }

    useEffect(() => {
        main()
        // console.log(favorites)
    }, [locationCode])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            {mainPageState && <MainPage
                favorites={mainPageState.favorites}
                city={mainPageState.city}
                forecast={forecast}
                WeatherText={current.WeatherText}
                date={current.LocalObservationDateTime}
                temp={current?.Temperature?.Metric?.Value}
                icon={String(current.WeatherIcon)?.length !== 2 ? `https://developer.accuweather.com/sites/default/files/0${current.WeatherIcon}-s.png` : `https://developer.accuweather.com/sites/default/files/${current.WeatherIcon}-s.png`}
            />}
        </>
    )
}

export default MainPageContainer;