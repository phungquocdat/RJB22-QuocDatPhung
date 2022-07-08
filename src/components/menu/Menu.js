import React from "react";
import './Menu.css'

function Menu1(props) {
    const {color , size}= props

    return(
        <>
        <p style={{color : color}} className={`size-${size}`}>Menu1 {color} {size}</p>
        </>
    )
}

export default Menu1;