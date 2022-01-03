import React from 'react'
import './Card.js';
import './Card.css';
import Cards from './Cards.js';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
function Card() {
const [product, setProduct] = useState([])
  useEffect(() => {
    async function fetchData(){
     const result= await axios.get('https://assessment-edvora.herokuapp.com/')
     setProduct(result.data)
    }
    fetchData();
  }, [])
    return (
        <div className="card">
            <p>product name</p>
            <hr />
            
        <div className="card__cards">
            {
                product.map((data,i)=>(
                    <Cards
                    key={i}
                    productname={data.product_name}
                    price={data.price}
                    description={data.discription}
                    date={data.date}
                    image={data.image}
                    location={data.address.city}
                    brand={data.brand_name}
                    />
                ))
            }
        </div>
           
        </div>
    )
}

export default Card
