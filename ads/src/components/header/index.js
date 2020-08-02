import React from 'react'
import getNavigation from '../../utils/navigation'
import styles from './index.module.css'

const Header = () => {

    const links = getNavigation()
    console.log(links);

    return (
        <nav className={styles.topnav}>
            <a href={links[0].link} key={links[0].title} value={links[0].title} type="header">{links[0].title} </a>
            <div className={styles['topnav-right']}>
                {
                    links.map((l, i) => {
                        if (i > 0) {
                            return <a href={l.link} key={l.title} value={l.title} type="header">{l.title} </a>
                        }
                    })
                }
            </div>
        </nav>
    )
}

export default Header