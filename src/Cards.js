import React from 'react'
import './Cards.css';
import moment from 'moment';
function Cards({productname,price,location,description,date,image,brand}) {
    const dateformat=moment(date).format('DD MMM YY')
    return (
        <div className="cards">
                <div className="card__details">
                    <img src={image} alt=""/>

                    <div className="card__info">
                        <h5>{productname}</h5>
                        <p>{brand}</p>
                        <span> $ {price}</span>
                    </div>
                </div>
                <div className="card__date">
                    <p>Loc: {location}</p>
                    <p>Date: {dateformat}</p>
                </div>
                <div className="card__desc">
                <span>{description}</span>
                </div>
        </div>
    )
}

export default Cards
