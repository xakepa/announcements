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
import ErrorMessage from '../../components/error-message'



const keyIcon = <FontAwesomeIcon icon={faKey} />
const userIcon = <FontAwesomeIcon icon={faUser} />

const RegisterPage () => {

    const context = useContext(UserContext)
    const history = useHistory()
    const [email, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [message, setMessage] = useState('')


    const onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }


    const handleSubmit = async (event) => {
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

    const blur = () => {
        if (this.state.password.length < 6) {


            this.setState({
                message: 'Паролата трябва да бъде не по-малко от 6 символа'
            })

        } else if (this.state.password !== this.state.rePassword) {
            this.setState({
                message: 'Паролите не съвпадат'
            })
        }
        else {
            this.setState({
                message: ''
            })
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
                        type="email" placeHolder="Вашият email" />

                    <Input label={keyIcon} value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        blur={blur}
                        type="password" placeHolder="Парола" />

                    <Input label={keyIcon} value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
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