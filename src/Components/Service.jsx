import React from 'react'
import Cardcomponant from './cardcomponant'
import carddata from './carddata'


const Service = () => {
    return (
        <>
            <div className='my-5 container text-center'>
                <h1> Our Services</h1>
            </div>
            <div className="row">
                {carddata.map((val) => {
                    return (
                        <Cardcomponant
                            key={val.id}
                            moviename={val.moviename}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            link={val.link}
                        />
                    )
                })}
            </div>
        </>
    )
}



export default Service;
