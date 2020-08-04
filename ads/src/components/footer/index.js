import React from 'react'
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer}>
                <li><a href="#">За страницата</a></li>
                <li><a href="#">Събития</a></li>
                <li><a href="#">Работа</a></li>
            </ul>
            <ul className={styles.footer}>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Линкове</a></li>
                <li><a href="#">Контакти</a></li>
            </ul>
            <ul className={styles.footer}>
                <li><a href="#">&copy; 2020</a></li>
                <li><a href="#">Условия за ползване</a></li>
                <li><a href="#">Сигурност</a></li>
            </ul>
        </footer>
    )
}

export default Footer
