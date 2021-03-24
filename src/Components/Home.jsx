import React from 'react'
import Main from './Main'
import img from '../images/im1.jpg'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Main name='Learn Online' imgsrc={img} visit='/service' btnname='Get Started' idname='animated'/>
            <Footer/>
        </>

    )
}

export default Home;