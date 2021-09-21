import React from 'react'
import './hero.css'
import Button from './button'


const hsec3 = () => {
    return (
        <div className="hsec3">
            <div className="input-container">
                <div className="inputPlocate">
                    <input className="input-box" type="text" placeholder="Enter your delivery location" />
                    <div className="locate-btn">
                    
                    <span> &nbsp;Locate Me</span>
                    </div>
                </div>
                <Button classes={'find-food-btn'} name={'Find Food'} />
            </div>
        </div>
    )
}
export default hsec3