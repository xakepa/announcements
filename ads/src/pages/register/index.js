import React from 'react'
import styles from './index.module.css'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/input'
import SumbitButton from '../../components/button/submit-button'
import Title from '../../components/title'


const keyIcon = <FontAwesomeIcon icon={faKey} />
const userIcon = <FontAwesomeIcon icon={faUser} />

class RegisterPage extends React.Component {
    state = {
        username: '',
        password: '',
        rePassword: ''
    }
    render() {
        const { username, password, rePassword } = this.state

        return (
            <div>
                <Header />
                <main className={styles.main}>

                    <form className={styles.register} onSubmit={this.handleSubmit}>

                        <Title h2title="Регистрирай се безплатно"
                            h3title="Вече сте регистрирани?" link="/login" linkValue="Впишете се сега" />

                        <Input label={userIcon} type="email" placeHolder="Вашият email" />
                        <Input label={keyIcon} type="password" placeHolder="Парола" />
                        <Input label={keyIcon} type="password" placeHolder="Парола (още веднъж)" />
                        <SumbitButton title="Регистрирай се" />

                        <div className={styles.title}>
                            <input type="checkbox" className={styles.checkbox} />
                            <span><a className={styles.agreement} href="/agrement">Приемам условията за ползване и политиката за лични дани</a></span>
                        </div>
                    </form>
                </main>
                <Footer />
            </div>
        )
    }
}

export default RegisterPage