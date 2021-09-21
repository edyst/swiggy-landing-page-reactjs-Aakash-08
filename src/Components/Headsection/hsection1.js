import React from 'react'
import './head.css'
import Logo from '../assets/Swiggy_logo.png' 
import Button from './button'


const hsection1 = () => {
    return (
        <div className="hsection1">
            <img className="logo" src={Logo} alt="swiggylogo" />
            <div className="buttons-sect">
                <Button classes={'login-btn'} name={'Login'} />
                <Button classes={'sign-up-btn'} name={'Sign up'} />
            </div>
        </div>
    )
}
export default hsection1