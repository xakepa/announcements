import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import styles from './index.module.css'
import Input from '../../components/input'
import SubmitButton from '../../components/button/submit-button'
import Title from '../../components/title'


const CreateAd = () => {

    const handleSubmit = () => {

    }

    return (
        <PageWrapper>
            <form className={styles.create} onSubmit={handleSubmit}>

                <Title h2title="Добави нова обява" />

                <Input label="Заглавие на обявата" type="text" placeHolder="Заглавие на обявата" />
                <Input label="Категория" type="text" placeHolder="Категория на обявата" />
                <Input label="Снимка" type="text" placeHolder="Добави линк към снимката" />
                <Input label="Категория" type="text" placeHolder="Категория на обявата" />
                <label for="ad-condition">Състояние:</label>

                <select className={styles.option} required id="ad-condition">
                    <option value="">--моля избери състояние на продукта--</option>
                    <option value="Ново">Ново</option>
                    <option value="Използвано">Използвано</option>
                </select>
                <label for="description">Описание...</label>

                <textarea className={styles.textarea} id="description" name="description"
                >
                </textarea>
                <Input label="Телефон за контакти" type="text" placeHolder="Телефон за контакти" />
                <SubmitButton title="ДОБАВИ ОБЯВА" />
            </form>
        </PageWrapper>
    )
}

export default CreateAd