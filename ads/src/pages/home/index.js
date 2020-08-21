import React, { useEffect, useState } from 'react'
import PageWrapper from '../../components/page-wrapper'
import SingleAdv from '../../components/single-ad'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import noImage from '../../images/noimage.png'


const searchIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faSearch} />


const Home = () => {

    const [ads, setAds] = useState([])

    const getAds = () => {
        fetch(`http://localhost:8000/api/ads`)
            .then(res => res.json())
            .then(ads => {
                setAds(ads)
            })
            .catch(console.error)
    }

    useEffect(() => {
        getAds()
    }, [])

    const renderAds = () => {
        return ads.map(singleAdv => <SingleAdv adTitle={singleAdv.title} adId={singleAdv._id} imgUrl={singleAdv.imageUrl || noImage} key={singleAdv._id}  {...singleAdv} />)
    }

    return (
        <PageWrapper>
            <div className={styles.block}>
                <div className={styles.searchBar}>
                    <span>{searchIcon} </span> <input className={styles.search} type="text"

                        placeholder="Търси обяви.." />
                </div>

                <section className={styles.container}>
                    {renderAds()}
                </section>
            </div>
        </PageWrapper>
    )
}

export default Home