import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import styles from './index.module.css'
import nopic from '../../images/nopic.jpg'


class Details extends React.Component {

    state = {
        ad: {}
    }

    componentDidMount() {
        this.getAd(this.props.match.params.id)
    }

    getAd = async (id) => {
        const response = await fetch(`http://localhost:8000/api/ads?id=${id}`)

        const ads = await response.json()
        const singleAd = ads.find(ad => ad._id === id)

        console.log(singleAd);
        this.setState({
            ad: singleAd
        })

    }


    render() {
        const { title,
            imageUrl,
            description,
            createdAt,
            location,
            phoneNumber,
            price,
            condition
        } = this.state.ad

        return (
            <PageWrapper>
                <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1>
                    <img className={styles.img} src={imageUrl || nopic} alt={title} />
                    <aside className={styles.aside}>
                        <p>Телефон за връзка: 0{phoneNumber}</p>
                        <p>Местоположение: {location}</p>
                        <p>Състояние: {condition || '-'}</p>
                    </aside>
                    <p className={styles.description}>{description}</p>
                </div>
            </PageWrapper>
        )
    }
}

export default Details