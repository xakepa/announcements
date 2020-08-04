import React from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/input'
import SumbitButton from '../../components/button/submit-button'
import Title from '../../components/title'
import PageWrapper from '../../components/page-wrapper'


const keyIcon = <FontAwesomeIcon icon={faKey} />
const userIcon = <FontAwesomeIcon icon={faUser} />

class LoginPage extends React.Component {
    state = {
        username: '',
        password: '',

    }
    render() {
        const { username, password } = this.state

        return (

            <PageWrapper>
                <form className={styles.login} onSubmit={this.handleSubmit}>

                    <Title h2title="Моля въведете вашият email и парола"
                        h3title="Нямате регистрация?" link="/register" linkValue="Регистрирайте се сега" />

                    <Input label={userIcon} type="email" placeHolder="Вашият email" />
                    <Input label={keyIcon} type="password" placeHolder="Парола" />
                    <SumbitButton title="Впиши се" />

                    <div className={styles.title}>
                        <span><a className={styles.agreement} href="/agrement">Влизайки в профила си приемам общите условия на сайта.</a></span>
                    </div>
                </form>
            </PageWrapper>
        )
    }
}

export default LoginPage