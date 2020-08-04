import React, { useState, useEffect, useRef } from 'react'
import styles from './Home.module.css'
import cx from 'classnames';
import {faPlay, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Calendar from 'react-calendar';
import Popup from '../Popup/Popup'

import {TimelineLite, Expo} from 'gsap';
const Home = () => {
    const tl = new TimelineLite();
    let container = useRef(null);
    let h6 = useRef(null);
    let h1 = useRef(null);
    let adventure = useRef(null);
    let bookings = useRef(null);
    
    const [hoverPlayState, setHoverPlayState] = useState(false);
    const [hoverBookState, setHoverBookState] = useState(false)
    const [playVideo, setPlayVideo] = useState(false);

    const [date, setDate] = useState(new Date());
    const [handleClick, setHandleClick] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    const [check, setCheck] = useState(Boolean);

    const [bookNow, setBookNow] = useState(false);

    useEffect(() => {
        tl.from(container, 3, {
            scale: .6,
            y: 250,
            ease: Expo.ease
        })
        .staggerFrom([h1, h6], 1, {
            y: -50,
            opacity:0,
            ease: Expo.ease
        }, .2)
        .from(adventure, 1, {
            x: -1000,
            opacity: 0,
            ease: Expo.ease
        })
        
        
        for(let i=0; i<bookings.children.length; i++) {
            tl.from(bookings.children[i], .5, {
                opacity: 0,
                y: 20,
                ease: Expo.ease
            }) 
        }
    }, [])
    
    const onChange = (date) => {
        if(!check) {
            setStartDate(date)
        } else {
            setEndDate(date)
        }
    }
    const handleChangeCheckIn = () => {
        setCheck(false);
        setHandleClick(true);
    }
    const handleChangeCheckOut = () => {
        setCheck(true);
        setHandleClick(true);
    }

    const handleClickSubmit = (e) => {
        e.preventDefault();
        if(startDate > endDate || endDate < startDate) {
            setBookNow(false)
        } 
        else setBookNow(true)
    }
    
    return (
        <div ref={e=>container=e} className={styles.container}>
            {bookNow ? <Popup checkIn={startDate} checkOut={endDate} /> : null}
            <div className={styles.details}>
                <h6 ref={e=>h6=e}>Welcome to sochi hotel</h6>
                <h1 ref={e=>h1=e}>Feeling Cool Like <br/>Your Favorite Place.</h1>
                <div ref={e=>adventure=e}>
                    <span>Adventure</span>
                    <button 
                        onClick={e=>setPlayVideo(!playVideo)}
                        onMouseEnter={e=>setHoverPlayState(true)} 
                        onMouseLeave={e=>setHoverPlayState(false)} 
                        className={hoverPlayState ? cx(styles.play, styles.hover) : styles.play}>
                        <FontAwesomeIcon icon={faPlay}/>
                    </button>
                </div>   
            </div>
            <div ref={e=>bookings=e} className={styles.bookings}>          
                <div>
                    <span>Check In</span>
                    <select name="date" onClick={handleChangeCheckIn}>
                        <option value={startDate}>{startDate.toDateString()}</option>
                    </select>
                    
                </div>
                <div>
                    <span>Check out</span>
                    <select name="date" onClick={handleChangeCheckOut}>
                        <option value={endDate}>{endDate.toDateString()}</option>
                    </select>
                </div>
                <div>
                    <span>Person</span>
                    <select name="members">
                        <option value="1">1 Adult</option>
                        <option value="2">2 Adult</option>
                        <option value="3">3 Adult</option>
                        <option value="4">4 Adult</option>
                        <option value="5">5 Adult</option>
                    </select>
                </div>
                <div>
                    <span className={styles.next}>Next</span>
                    <button
                    type="submit"
                    onClick={handleClickSubmit}
                    onMouseEnter={e=>setHoverBookState(true)} 
                    onMouseLeave={e=>setHoverBookState(false)} 
                    className={hoverBookState ? cx(styles.book, styles.hover) : styles.book}>
                    book now</button>
                </div>
                <div className={styles.scroll}>
                    <span>scroll</span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
            <div className={handleClick ? cx(styles.date, styles.open) : styles.date}>
                <span onClick={e=>setHandleClick(false)}>Close</span>
                <Calendar 
                    activeStartDate={new Date()} 
                    onClickDay={e=>setHandleClick(false)} 
                    className={styles.calendar} 
                    minDate={new Date()} 
                    onChange={onChange} 
                    value={date} 
                /> 
            </div>

            <div className={playVideo ? cx(styles.video, styles.show) : cx(styles.video, styles.hide)}>
                <span onClick={e=>setPlayVideo(false)}>x</span>
                <iframe width="853" height="480" src="https://www.youtube.com/embed/9xwazD5SyVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Home
