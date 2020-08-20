import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import SingleAdv from '../../components/single-ad'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faSearch} />


class Home extends React.Component {

    state = {
        ads: []
    }

    getAds = () => {
        fetch(`http://localhost:8000/api/ads`)
            .then(res => res.json())
            .then(ads => {
                this.setState({ ads })
            })
            .catch(console.error)
    }

    componentDidMount() {
        this.getAds();
    }

    renderAds = () => {
        const { ads } = this.state;

        return ads.map((singleAdv, i) => <SingleAdv adTitle={singleAdv.title} adId={singleAdv._id} imgUrl={singleAdv.imageUrl} key={singleAdv._id}  {...singleAdv} />)
    }

    render() {
        return (
            <PageWrapper>
                <div className={styles.block}>
                    <div className={styles.searchBar}>
                        <span>{searchIcon} </span> <input className={styles.search} type="text" placeholder="Търси обяви.." />
                    </div>
                    <section className={styles.container}>

                        {this.renderAds()}
                    </section>
                </div>
            </PageWrapper>
        )
    }
}

export default Home