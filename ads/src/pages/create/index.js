import React, { useState, useContext } from 'react'
import PageWrapper from '../../components/page-wrapper'
import styles from './index.module.css'
import Input from '../../components/input'
import SubmitButton from '../../components/button/submit-button'
import Title from '../../components/title'
import getCookie from '../../utils/cookie'
import ErrorMessage from '../../components/error-message'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faImage, faGripHorizontal, faPhoneSquare, faCoins, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../../Context'
import { useHistory } from 'react-router-dom'

const adIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faAd} />
const imgIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faImage} />
const categoryIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faGripHorizontal} />
const phoneIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faPhoneSquare} />
const moneyIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faCoins} />
const locationIcon = <FontAwesomeIcon className={styles.icon} size="lg" icon={faLocationArrow} />

const CreateAd = () => {
    const context = useContext(UserContext)
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [condition, setCondition] = useState('')
    const [description, setDescription] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()
    const [price, setPrice] = useState('')
    const fetchUri = `https://buybg.herokuapp.com`


    const handleSubmit = async (e) => {
        e.preventDefault()
        const promise = await fetch(`${fetchUri}/api/ads`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                category,
                location,
                imageUrl,
                condition,
                description,
                phoneNumber,
                price,
                user: context.user
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('jwt-token')
            }
        })

        //const data = await promise.json()
        history.push('/')
    }

    const blur = () => {
        if (title.length > 28) {
            setMessage('Дължината на заглавието не трябва да превишава 28 символа')
        }
        else {
            setMessage('')
        }
    }

    return (
        <PageWrapper>
            {message ? (<ErrorMessage message={message} />) : null}
            <div className={styles.container}>
                <form className={styles.create}>

                    <Title link="" h2title="Добави нова обява" />

                    <Input blur={blur} label={adIcon} value={title} onChange={e => setTitle(e.target.value)} mandatory='*' placeHolder="Заглавие на обявата" />
                    <Input label={categoryIcon} value={category} onChange={e => setCategory(e.target.value)} mandatory='*' placeHolder="Категория на обявата" />
                    <Input label={locationIcon} value={location} onChange={e => setLocation(e.target.value)} mandatory='*' placeHolder="Местоположение" />
                    <Input label={imgIcon} value={imageUrl} noValidate onChange={e => setImageUrl(e.target.value)} placeHolder="Добави линк към снимката" />
                    <label htmlFor="ad-condition">Състояние:</label>

                    <select noValidate className={styles.option} value={condition} onChange={e => setCondition(e.target.value)} id="ad-condition">
                        <option value="">--моля избери състояние на продукта--</option>
                        <option value="Ново">Ново</option>
                        <option value="Използвано">Използвано</option>
                    </select>
                    <label htmlFor="description">Описание...</label>

                    <textarea className={styles.textarea} value={description} onChange={e => setDescription(e.target.value)} />
                    <Input label={phoneIcon} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} mandatory='*' placeHolder="Телефон за контакти" />
                    <Input label={moneyIcon} value={price} onChange={e => setPrice(e.target.value)} mandatory='*' placeHolder="Цена в лева" />
                    <span className={styles.info}>Полетата маркирани със звезда * са задължителни</span>
                    <SubmitButton onClick={handleSubmit} title="ДОБАВИ ОБЯВА" />
                </form>
            </div>
        </PageWrapper>
    )
}

export default CreateAd