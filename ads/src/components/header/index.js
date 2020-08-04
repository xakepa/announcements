import React from 'react'
import getNavigation from '../../utils/navigation'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const links = getNavigation()

    return (
        <nav className={styles.topnav}>
            <a href={links[0].link} key={links[0].title} value={links[0].title} type="header">{links[0].title} </a>
            <div className={styles['topnav-right']}>
                {
                    links.map((l, i) => {
                        if (i > 0) {
                            return <Link to={l.link} key={l.title} value={l.title} type="header">{l.title} </Link>
                        }
                    })
                }
            </div>
        </nav>
    )
}

export default Header