import React from "react"
import Cardcomponant from './cardcomponant'
import carddata from './carddata'


const Card = () => {
    return (
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
    )
}


export default Card;