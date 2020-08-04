import React from 'react'
import styles from './index.module.css'
import Footer from '../../components/footer'
import Header from '../../components/header'

const PageWrapper = (props) => {
    return (
        <div>
            <Header />
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default PageWrapper