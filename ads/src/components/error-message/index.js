import React from 'react'
import styles from './index.module.css'

const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.container}>
            <p className={styles.notificationsMessage}>{message}</p>
        </div>
    )
}

export default ErrorMessage