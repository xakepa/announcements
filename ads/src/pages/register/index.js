import React from 'react'
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


const keyIcon = <FontAwesomeIcon icon={faKey} />
const userIcon = <FontAwesomeIcon icon={faUser} />

class RegisterPage extends React.Component {
    state = {
        email: '',
        password: '',
        rePassword: ''
    }

    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password, rePassword } = this.state

        await authenticate('http://localhost:8000/api/user/register', {
            email, password, rePassword
        }, (user) => {
            this.context.logIn(user)
            this.props.history.push('/')
        }, (e) => {

            console.log('Error', e)
        })
    }

    validateEmail = () => {
        if (this.state.email.length < 2) {
            console.log('TOO SHORT');
        }
    }

    render() {
        const { email, password, rePassword } = this.state

        return (

            <PageWrapper>
                <div className={styles.container}>
                    <form className={styles.register} onSubmit={this.handleSubmit}>

                        <Title h2title="Регистрирай се безплатно"
                            h3title="Вече сте регистрирани?" link="/login" linkValue="Впишете се сега" />

                        <Input label={userIcon} value={email}
                            onChange={(e) => { this.onChange(e, 'email') }}
                            onBlur={this.validateEmail}
                            type="email" placeHolder="Вашият email" />

                        <Input label={keyIcon} value={password}
                            onChange={(e) => { this.onChange(e, 'password') }}
                            type="password" placeHolder="Парола" />

                        <Input label={keyIcon} value={rePassword}
                            onChange={(e) => { this.onChange(e, 'rePassword') }}
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
}

export default RegisterPage