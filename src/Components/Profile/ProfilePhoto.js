import React from 'react'
import myPic from "./mee.jpg"


const Picture = () => {
    return(
        <div className="pic">
            <img src = {myPic} alt = 'mee'/>
        </div>
    )
}

export default Picture; 