import React, {useState, useRef, useEffect} from 'react'
import styles from './Nav.module.css'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/logo.png'
import {TimelineLite, Expo} from 'gsap'
const Nav = () => {
    const tl = new TimelineLite();
    let nav = useRef(null)
    const [logoHover, setLogoHover] = useState(Boolean)
    const [reservationHover, setReservationHover] = useState(Boolean)

    useEffect(() => {
        tl.from(nav, 5, {
            opacity: 0,
            y: -1500,
            ease: Expo.ease
        })
    }, [])
    return (
        <nav ref={e=>nav=e} className={styles.nav}>
            <div className={styles.logo}>
                <a href="google.com/#test" 
                onMouseEnter={e=>setLogoHover(true)}
                onMouseLeave={e=>setLogoHover(false)}
                >
                    <img src={Logo} alt="Sochi"/>
                    <span className={logoHover ? styles.hover : null}>Sochi</span>
                </a>
            </div>
            <ul className={styles.primaryMenu}>
                <li>Rooms</li>
                <li>Gallery</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <button 
            onMouseLeave={e=>setReservationHover(false)}
            onMouseEnter={e=>setReservationHover(true)}
            className={reservationHover ? cx(styles.reservation, styles.hover) : styles.reservation}>
                <FontAwesomeIcon icon={faBookmark} />
                Reservation
            </button>
        </nav>
    )
}

export default Nav
