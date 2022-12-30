import React from 'react'
import Common from './Common'
import web from './images/home.jpg'


const Home = () => {
    return (
        <>
            <Common 
                name="Grow Your Bussiness"
                btname="Get Started"
                visit="/service"
                imgsrc={web}
            />
        </>
    )
}

export default Home
