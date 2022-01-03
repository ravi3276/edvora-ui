import React from 'react'
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
                <div className="card__details">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt=""/>

                    <div className="card__info">
                        <h5>product name</h5>
                        <p>brand name</p>
                        <span> $ 29.34</span>
                    </div>
                </div>
                <div className="card__date">
                    <p>Loc: hyderabad</p>
                    <p>Date: 01/01/22</p>
                </div>
                <div className="card__desc">
                <span>dbfhjudufbdfufughdhbfeywegjdshdravfyetejavriteja</span>
                </div>
        </div>
    )
}

export default Cards
