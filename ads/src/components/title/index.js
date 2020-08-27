import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Title = ({ h2title, h3title, link, linkValue }) => {
    return (
        <div className={styles.title}>
            <h2>{h2title}</h2>
            <h3>{h3title} <span><Link className={styles.span} to={link}>{linkValue}</Link></span> </h3>
        </div>
    )
}

export default Title