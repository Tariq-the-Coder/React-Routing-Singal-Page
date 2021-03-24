import React from "react"

const cardcomponant = (props) => {
    return (
        <>
            <div className='col-12 col-md-4 mx-auto'>
                <div className="card mx-auto my-5" style={{ width: '18rem' }}>
                    <img src={props.imgsrc} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <p className="card-text">{props.title}</p>
                        <h5 className="card-title">{props.moviename}</h5>
                        <a href={props.link} className="btn">Watch Now</a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default cardcomponant;