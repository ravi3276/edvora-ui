import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import './SideFilters.css';
function SideFilters() {
    const city=[]
    const add=[]
    const products=[]
    const [product, setProduct] = useState([])
    const [select1, setSelect1] = useState(null)
    const [select2, setSelect2] = useState(null)


  useEffect(() => {
    async function fetchData(){
     const result= await axios.get('https://assessment-edvora.herokuapp.com/')
     setProduct(result.data)
    }
    fetchData();

  }, [])

  product.forEach(element => {
    products.push(element.product_name);
      add.push(element.address.state);
      city.push(element.address.city);
  });

  const newproducts=products.filter((item,i)=>{
    return products.indexOf(item) === i
})

  const newAdd=add.filter((item,i)=>{
      return add.indexOf(item) === i
  })

  const newCity=city.filter((item,i)=>{
    return city.indexOf(item) === i
})

    return (
        <div className="sideFilters">
            <div className="sideFilters__container">
                <h1>Filters</h1>
                
                <div className="filters">
                <select onChange={(e)=>{setSelect1(e.currentTarget.value)}}>
                    <option>Product</option>
                    {
                      newproducts.map((product, i) =>(
                          <option key={i}>{product}</option>
                      ))
                  }
                </select>
                </div>
                
                <div className="filters">
                <select onChange={(e)=>{setSelect2(e.currentTarget.value)}}>
                    <option>state</option>
                  {
                    select1 &&  newAdd.map((state, i) =>(
                          <option key={i}>{state}</option>
                      ))
                  }
                </select>
                </div>

                <div className="filters">
                <select>
                    <option>city</option>
                    {
                    select2 &&  newCity.map((city, k) =>(
                          <option key={k}>{city}</option>
                      ))
                  }
                </select>
                </div>
            </div>
        </div>
    )
}

export default SideFilters
