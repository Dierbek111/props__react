import './Card.scss'
import React from 'react'

const Card = ({name="SOON", img="https://cdn.dribbble.com/users/225707/screenshots/2958729/jelly-fluid-loader.gif"} ) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>99 отзывов</p>
                <button>Купить</button>
            </div>
        </>
    )
}

export default Card