import React, { useEffect, useRef } from 'react'
import styles from './Overlay.module.css'
import {TimelineLite, Expo} from 'gsap';
const Overlay = () => {
    const tl = new TimelineLite();
    let container = useRef(null);
    let heading = useRef(null)
    let paragraph = useRef(null)
    useEffect(() => {
        tl.to(heading, 1.5, {
            opacity: 0,
            y: -50,
            ease: Expo.ease
        })
         .to(paragraph, 1, {
             opacity: 0,
             y: -50,
             ease: Expo.ease
         })
         .to(container, .5, {
             opacity: 0.5,
             top: "-100%",
             ease: Expo.ease
         }, 2)
        
    }, [])
    return (
        <div ref={e=>container=e} className={styles.container}>
            <h2 ref={e=>heading=e}>Travel</h2>
            <p ref={e=>paragraph=e}>Like you own it.</p>
        </div>
    )
}

export default Overlay
