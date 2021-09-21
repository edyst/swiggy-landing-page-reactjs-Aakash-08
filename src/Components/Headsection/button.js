import React from 'react'
import './head.css'

const button = (props)=> {
    return (
        <button className={props.classes}>{props.name}</button>
    )
}
export default button