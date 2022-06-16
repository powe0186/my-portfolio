import React, { useState } from 'react';
import 'bootstrap';
import background from "../images/binary.PNG"

const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'round',
    height: 90,
    width: '1vp',
}

const DecorationBar = () => {
    

    return (

        <div  style={sectionStyle}>
        </div>
    )
}

export default DecorationBar;