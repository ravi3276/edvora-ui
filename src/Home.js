import React from 'react'
import './Home.css'
import Main from './Main'
import SideFilters from './SideFilters'
function Home() {
    return (
        <div className="home">
            <SideFilters />
            <Main />
        </div>
    )
}

export default Home
