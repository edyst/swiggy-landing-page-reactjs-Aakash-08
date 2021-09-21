import React from 'react'
import './restaurants.css'
import RSEC from './Rsec'
import IMG1 from '../assets/rsec1.png'
import IMG2 from '../assets/rsec2.png'

const restaurants = () => {
    return (
        <div className="restaurants">
            <RSEC />
            <div className="rsec2">
                <img className="img-rsec1" src={IMG2} alt={""} />
                <img className="img-rsec2" src={IMG1} alt={""} />
            </div>
        </div>
    )
}
export default restaurants