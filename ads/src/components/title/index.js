import React from 'react'
import styles from './index.module.css'

const Title = ({ h2title, h3title, link, linkValue }) => {
    return (
        <div className={styles.title}>
            <h2>{h2title}</h2>
            <h3>{h3title} <span><a className={styles.span} href={link}>{linkValue}</a></span> </h3>
        </div>
    )
}

export default Title