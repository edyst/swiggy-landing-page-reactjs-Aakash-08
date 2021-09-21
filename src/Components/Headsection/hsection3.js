import React from 'react'
import './head.css'
import Button from './button'


const hsection3 = () => {
    return (
        <div className="hsection3">
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
export default hsection3