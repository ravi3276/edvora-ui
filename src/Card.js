import React from 'react'
import './Card.js';
import './Card.css';
import Cards from './Cards.js';
function Card() {
    return (
        <div className="card">
            <p>product name</p>
            <hr />
            
        <div className="card__cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

       

        </div>
           
        </div>
    )
}

export default Card
