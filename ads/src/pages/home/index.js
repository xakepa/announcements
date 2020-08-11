import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import SingleAdd from '../../components/single-ad'
import styles from './index.module.css'
import ps3 from './PS3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faSearch} />


const Home = () => {
    return (
        <PageWrapper>
            <div className={styles.block}>
                <div className={styles.searchBar}>
                    <span>{searchIcon} </span> <input className={styles.search} type="text" placeholder="Търси обяви.." />
                </div>
                <section className={styles.container}>
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                    <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="300 лв" />
                </section>
            </div>
        </PageWrapper>

    )
}

export default Home