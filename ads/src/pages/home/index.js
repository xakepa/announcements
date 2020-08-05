import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import SingleAdd from '../../components/single-ad'
import styles from './index.module.css'
import ps3 from './PS3.jpg'


const Home = () => {
    return (
        <PageWrapper>
            <section className={styles.container}>
                <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="200 лв" />
                <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="200 лв" />
                <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="200 лв" />
                <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="200 лв" />
                <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="200 лв" />
                <SingleAdd imgUrl={ps3} adTitle="Продавам PS3" price="200 лв" />
            </section>
        </PageWrapper>
    )
}

export default Home