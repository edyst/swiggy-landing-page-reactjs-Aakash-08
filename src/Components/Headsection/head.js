import React from 'react'
import HSECTION1 from './hsection1'
import HSECTION2 from './hsection2'
import HSECTION3 from './hsection3'
import HSECTION4 from './hsection4'

import './head.css'

const head = () => {
    return (
        <div className="headsection">
            <div className="head-subsec">
                <HSECTION1 />
                <HSECTION2 />
                <HSECTION3 />
                <HSECTION4 />
                
            </div>
        </div>
    )
}
export default head