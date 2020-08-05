import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Dropdown = () => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Профил</button>
            <div className={styles['dropdown-content']}>
                <Link to="/create-ad">Добави обява</Link>
                <Link to="/myads">Моите обяви</Link>
                <Link to="/profile">Моят профил</Link>
                <Link to="/logout">Отпиши се</Link>
            </div>
            <p><i className={styles.down}></i></p>
        </div>
    )
}

export default Dropdown