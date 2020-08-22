import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import styles from './index.module.css'
import nopic from '../../images/nopic.jpg'
import UserContext from '../../Context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faGripHorizontal, faPhoneSquare, faCoins, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
const categoryIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faGripHorizontal} />
const phoneIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faPhoneSquare} />
const moneyIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faCoins} />
const locationIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faLocationArrow} />
const conditionIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faAtom} />


class Details extends React.Component {

    state = {
        ad: {},
        owner: false
    }

    static contextType = UserContext

    componentDidMount() {
        this.getAd(this.props.match.params.id)
    }

    getAd = async (id) => {
        const response = await fetch(`http://localhost:8000/api/ads?id=${id}`)

        const ads = await response.json()
        const singleAd = ads.find(ad => ad._id === id)

        if (this.context.user) {
            if (singleAd.owner === this.context.user.id) {
                this.setState({
                    owner: true
                })
            }
        }

        this.setState({
            ad: singleAd
        })
    }

    deleteAdv = () => { }

    render() {
        const { title,
            imageUrl,
            description,
            createdAt,
            category,
            location,
            phoneNumber,
            price,
            condition,
        } = this.state.ad

        return (
            <PageWrapper>
                <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1>
                    <img className={styles.img} src={imageUrl || nopic} alt={title} />
                    <aside className={styles.aside}>
                        <p>{phoneIcon} 0{phoneNumber}</p>
                        <p>{locationIcon} {location}</p>
                        <p>{conditionIcon} {condition || '-'}</p>
                        <p>{categoryIcon} {category}</p>
                        <p>{moneyIcon} {price} лева</p>
                        <p>Дата на създаване:</p>
                        <p>{createdAt}</p>
                        {this.state.owner ? (<div>
                            <button className={styles.edit} type='submit' onClick={this.deleteAdv()} >Редактирай тази обява</button>
                            <button className={styles.delete} type='submit' onClick={this.deleteAdv()} >Изтрий обявата</button>
                        </div>) : null}
                    </aside>
                    <p className={styles.description}>{description}</p>
                </div>
            </PageWrapper>
        )
    }
}

export default Details