import React, { useState } from 'react'
import styles from './Popup.module.css'
import { useEffect } from 'react'
const Popup = ({checkIn, checkOut}) => {
    const [handleClick, setHandleClick] = useState(false)
    const handleChange = () => {
        setHandleClick(!handleClick);
    }
    
    return (
        <div className={handleClick ? styles.hide :styles.container}>
            <div>
                <h6 onClick={handleChange}>x</h6>
                <span>Success!</span>
                <p>Check In: {checkIn.toDateString()}</p>
                <p>Check Out: {checkOut.toDateString()}</p>
            </div>
        </div>
    )
}

export default Popup
