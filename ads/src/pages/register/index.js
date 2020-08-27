import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/input'
import SumbitButton from '../../components/button/submit-button'
import Title from '../../components/title'
import PageWrapper from '../../components/page-wrapper'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../components/error-message'



const keyIcon = <FontAwesomeIcon icon={faKey} />
const userIcon = <FontAwesomeIcon icon={faUser} />

const RegisterPage = () => {

    const context = useContext(UserContext)
    const history = useHistory()
    const [email, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:8000/api/user/register', {
            email, password, rePassword
        }, (user) => {
            console.log(user);
            context.logIn(user)
            history.push('/')
        }, (e) => {

            console.log('Error', e)
        })
    }

    const emailValidate = () => {
        const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!(email.match(emailValidator))) {
            setMessage('Грешен email. Всеки email трябва да съдържа име@домейн например ivan@mail.bg')
        } else {
            setMessage('')
        }
    }

    const blur = () => {

        if (password.length < 6) {
            setMessage('Паролата трябва да бъде не по-малко от 6 символа')

        } else if (password !== rePassword) {
            setMessage('Паролите не съвпадат')
        }
        else {
            setMessage('')
        }
    }

    return (

        <PageWrapper>
            {message ? (<ErrorMessage message={message} />) : null}
            <div className={styles.container}>
                <form className={styles.register} onSubmit={handleSubmit}>

                    <Title h2title="Регистрирай се безплатно"
                        h3title="Вече сте регистрирани?" link="/login" linkValue="Впишете се сега" />

                    <Input label={userIcon} value={email}
                        onChange={(e) => setUser(e.target.value)}
                        blur={emailValidate}
                        type="email" placeHolder="Вашият email" />

                    <Input label={keyIcon} value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" placeHolder="Парола" />

                    <Input label={keyIcon} value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        blur={blur}
                        type="password" placeHolder="Парола (още веднъж)" />
                    <SumbitButton title="Регистрирай се" />

                    <div className={styles.title}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span><Link className={styles.agreement} to="/agrement">Приемам условията за ползване и политиката за лични дани</Link></span>
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}

export default RegisterPage