import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'


const SingleAdv = ({ imgUrl, adTitle, altName, price, adId }) => {

    return (
        <div className={styles.ad}>
            <img className={styles.img} src={imgUrl} alt={altName} />
            <p className={styles.title}>{adTitle}</p>
            <span className={styles.price}>Цена: {price}</span>
            <Link className={styles.button} to={adId}>Подробности</Link>
        </div>
    )
}

export default SingleAdv