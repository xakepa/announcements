import React, { useState, useContext } from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/input'
import SumbitButton from '../../components/button/submit-button'
import Title from '../../components/title'
import PageWrapper from '../../components/page-wrapper'
import UserContext from '../../Context'
import authenticate from '../../utils/authenticate'
import { useHistory } from 'react-router-dom'


const keyIcon = <FontAwesomeIcon icon={faKey} />
const userIcon = <FontAwesomeIcon icon={faUser} />

const LoginPage = (props) => {
    const [email, setUser] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:8000/api/user/login', {
            email, password
        }, (user) => {
            context.logIn(user)
            context.user = user._id
            console.log(context.user);
            history.push('/')
        }, (e) => {
            console.log('Error', e)
        })
    }

    return (
        <PageWrapper>
            <div className={styles.container}>
                <form className={styles.login} onSubmit={handleSubmit}>

                    <Title h2title="Моля въведете вашият email и парола"
                        h3title="Нямате регистрация?" link="/register" linkValue="Регистрирайте се сега" />

                    <Input label={userIcon} type="email" value={email}
                        onChange={(e) => setUser(e.target.value)} id="email"
                        placeHolder="Вашият email" />

                    <Input label={keyIcon} type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} id="password"
                        placeHolder="Парола" />
                    <SumbitButton title="Впиши се" />

                    <div className={styles.title}>
                        <span><a className={styles.agreement} href="/agrement">Влизайки в профила си приемам общите условия на сайта.</a></span>
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}
export default LoginPage