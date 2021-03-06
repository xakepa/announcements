import React, { useContext } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import UserContext from '../../Context'
import { useHistory } from 'react-router-dom'




const Dropdown = () => {
    const context = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Профил</button>
            <div className={styles['dropdown-content']}>
                <Link to="/create">Добави обява</Link>
                <Link to="/myads">Моите обяви</Link>
                <Link to="/profile">Моят профил</Link>
                <Link to="" onClick={logOut}>Отпиши се</Link>
            </div>
            <p><i className={styles.down}></i></p>
        </div>
    )
}

export default Dropdown