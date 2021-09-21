import React from 'react'
import GPLAY from '../assets/gplay.png'
import ASTORE from '../assets/appstore.png'


const rsection = () => {
    return (
        <div className="rsec1">
            <h1 className="rsection-h1">Restaurants in</h1>
            <h1 className="rsection-h1">your pocket</h1>
            <p className="rsection-p">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
            <div className="rsection-img2">
                <img className="rsection-images2" src={GPLAY} alt="gplay" style={{marginRight:"20px"}}/>
                <img className="rsection-images2" src={ASTORE} alt="ios"/>
            </div>
        </div> 
    )
} 
export default rsection