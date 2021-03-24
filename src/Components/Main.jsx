import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Main = (props) => {
    return (
        <>
            <section className='d-flex align-items-center mt-5'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-12 col-xxl-6 order-2 order-lg-1  container d-flex justify-content-center flex-column '>
                            <div className='container '>
                                <h1>{props.name}</h1>
                                <h4 className='my-3'>Instant Doubt Resolution</h4>
                                <NavLink to={props.visit} id="mainbtn" className='btn  mt-3'>{props.btnname}</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 col-xxl-6  order-1 order-lg-2'>
                            <img src={props.imgsrc} className='w-100 ' id={props.idname} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Main;