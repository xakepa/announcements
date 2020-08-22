import React, { useContext } from 'react'
import getNavigation from '../../utils/navigation'
import styles from './index.module.css'
import { Link, useHistory } from 'react-router-dom'
import Dropdown from '../dropdown-menu'
import UserContext from '../../Context'

const Header = () => {

    const history = useHistory()
    const context = useContext(UserContext)
    const links = getNavigation(context.user)

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    return (

        <nav className={styles.topnav} >
            <Link to={links[0].link} key={links[0].title} value={links[0].title}>{links[0].title} </Link>
            <div className={styles['topnav-right']}>
                {
                    links.map((l, i) => {
                        if (l.title === 'Профил') {
                            return <Dropdown key="dropdown" />
                        } else if (l.title === 'Отпиши се') {
                            return <Link onClick={logOut} key={l.title} value={l.title}>{l.title} </Link>
                        }
                        else if (i > 0) {
                            return <Link to={l.link} key={l.title} value={l.title}>{l.title} </Link>
                        }
                    })
                }

            </div>
        </nav >
    )
}

export default Header