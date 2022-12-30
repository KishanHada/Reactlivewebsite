import React from 'react'
import Common from './Common'
import web from './images/about.jpg'

const About = () => {
    return (
        <>
            <Common
                name="Walcome To About Page"
                btname="Contact now"
                visit="/contact"
                imgsrc={web} />
        </>
    )
}

export default About
