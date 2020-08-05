import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const SingleAdd = ({ imgUrl, adTitle, altName, price }) => {

    return (
        <div className={styles.ad}>
            <img className={styles.ad} src={imgUrl} alt={altName} />
            <p className={styles.title}>{adTitle}</p>
            <span>Цена:</span> {price}
            <Link className={styles.button} to="/dynamic-content">Подробности</Link>
        </div>
    )
}

export default SingleAdd