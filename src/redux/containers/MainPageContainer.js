import React, { useEffect } from 'react'
import MainPage from '../../components/mainPage/MainPage';
import useForecast from '../../hooks/useForecast';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentConditions } from '../actions';


const MainPageContainer = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.mainPage[0]);
    console.log("state", state);
    const { locationCode, forecast } = useForecast();

    const main = async () => {
        const curr = await getCurrentConditions(locationCode)
        console.log("current",curr.payload)
        return dispatch(curr);
    }

    useEffect(() => {
        main()
    }, [locationCode])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>
            {state && <MainPage
                city={state.city}
                forecast={forecast}
                btn={state.btn}
                WeatherText={state.WeatherText}
                date={state.date}
                temp={state.temp}
                icon={String(state.icon).length !== 2 ? `https://developer.accuweather.com/sites/default/files/0${state.icon}-s.png` : `https://developer.accuweather.com/sites/default/files/${state.icon}-s.png`}
            />}
        </>
    )
}




//no hooks>?

// const mapStateToProps = (state) => {
//     return state;
// }

// const mapDispatchToProps = {
//     getCurrentConditions,
//     submitRequest
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MainPageContainer)

export default MainPageContainer;