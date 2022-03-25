import React from 'react'
import "./CardsList.css";
import Card from '../card/Card';

const CardsList = ({getDailyForecast,forecast,text}) => {
        return (
            <div className="cards-list">
                <Card getDailyForecast={getDailyForecast} text={text} forecast={forecast}/>
        </div>
    )
}

export default CardsList