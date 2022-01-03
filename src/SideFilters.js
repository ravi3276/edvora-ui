import React from 'react'
import './SideFilters.css';
function SideFilters() {
    return (
        <div className="sideFilters">
            <div className="sideFilters__container">
                <h1>Filters</h1>
                
                <div className="filters">
                <select>
                    <option>Product</option>
                    <option>apple</option>
                    <option>mi</option>
                    <option>sony</option>
                    <option>vivo</option>
                </select>
                </div>
                
                <div className="filters">
                <select>
                    <option>state</option>
                    <option>andhra</option>
                    <option>tamilnadu</option>
                    <option>maharastra</option>
                    <option>telangana</option> 
                </select>
                </div>

                <div className="filters">
                <select>
                    <option>city</option>
                    <option>vijayawada</option>
                    <option>hyderabad</option>
                    <option>mumbai</option>
                    <option>chennai</option>
                </select>
                </div>
            </div>
        </div>
    )
}

export default SideFilters
