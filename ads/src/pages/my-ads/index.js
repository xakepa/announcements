import React, { useEffect, useState, useContext } from 'react'
import PageWrapper from '../../components/page-wrapper'
import SingleAdv from '../../components/single-ad'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import noImage from '../../images/noimage.png'
import Spinner from '../../images/gear3.gif'
import UserContext from '../../Context'


const searchIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faSearch} />


const MyAds = () => {

    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const context = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:8000/api/ads`)
            .then(res => res.json())
            .then(ads => {
                const fileredAds = ads.filter(ad => ad.owner === context.user.id)
                setAds(fileredAds)
                setLoading(false)
            })
            .catch(console.error)
    }, [context.user.id])


    const filtered = ads.filter(ad => ad.title.toLowerCase()
        .includes(search.toLocaleLowerCase()))
    const renderAds = () => {
        return filtered.map(singleAdv => <SingleAdv adTitle={singleAdv.title} adId={singleAdv._id} imgUrl={singleAdv.imageUrl || noImage} key={singleAdv._id}  {...singleAdv} />)
    }

    if (loading) {
        return (
            <PageWrapper>
                <div className={styles.block}>
                    <div className={styles.searchBar}>
                        <span>{searchIcon} </span> <input className={styles.search} type="text"
                            placeholder="Търси в моите обяви.." />
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
            <div className={styles.title} >
                <h1 >МОИТЕ ОБЯВИ</h1>
            </div>
            <div className={styles.block}>
                <div className={styles.searchBar}>
                    <span>{searchIcon} </span> <input className={styles.search} type="text"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Търси в моите обяви.." />
                </div>
                <section className={styles.container}>
                    {renderAds()}
                </section>
            </div>
        </PageWrapper>
    )
}

export default MyAds