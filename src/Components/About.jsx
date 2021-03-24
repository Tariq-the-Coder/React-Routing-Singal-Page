import React from 'react'
import Main from './Main'
import img from '../images/im3.jpg'

const About = () => {
    return (
        <>
            <Main name='Learn From Anywhere' imgsrc={img} visit='/contact' btnname='Contact US' />
        </>
    )
}



export default About;
