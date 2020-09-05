import React, { useEffect, useState } from 'react'
import PageWrapper from '../../components/page-wrapper'
import SingleAdv from '../../components/single-ad'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import noImage from '../../images/noimage.png'
import Spinner from '../../images/gear3.gif'


const fetchUri = `https://buybg.herokuapp.com`
const searchIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faSearch} />


const Home = () => {

    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`${fetchUri}/api/ads`)
            .then(res => res.json())
            .then(ads => {
                setAds(ads)
                setLoading(false)
            })
            .catch(console.error)
    }, [])


    const filteredAds = ads.filter(ad => ad.title.toLowerCase()
        .includes(search.toLocaleLowerCase()))
    const renderAds = () => {
        return filteredAds.map(singleAdv => <SingleAdv adTitle={singleAdv.title} adId={singleAdv._id} imgUrl={singleAdv.imageUrl || noImage} key={singleAdv._id}  {...singleAdv} />)
    }

    if (loading) {
        return (
            <PageWrapper>
                {/* <div className={styles.logo}>
                    <img src={logo} alt='logo'>
                    </img></div> */}

                <div className={styles.block}>
                    <div className={styles.searchBar}>
                        <span>{searchIcon} </span> <input className={styles.search} type="text"
                            placeholder="Търси обяви.." />
                    </div>
                    <article className={styles.article}>
                        <img className={styles.spinner} src={Spinner} alt='spinner'></img>
                    </article>
                </div>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            {/* <div className={styles.logo}>
                <img src={logo} alt='logo'>
                </img></div> */}
            <div className={styles.block}>
                <div className={styles.searchBar}>
                    <span>{searchIcon} </span> <input className={styles.search} type="text"
                        onChange={e => setSearch(e.target.value)}
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