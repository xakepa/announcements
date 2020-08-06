import React from 'react'
import styles from './index.module.css'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Background from '../../images/milky-way.jpg'

const mainStyle = {
    backgroundImage: `url(${Background})`,
    width: "100%",
    'backgroundSize': 'cover'
}

const PageWrapper = (props) => {
    return (
        <div>
            <Header />
            <main style={mainStyle} className={styles.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default PageWrapper