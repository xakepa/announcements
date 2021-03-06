import React from 'react'
import styles from './index.module.css'
const Input = ({ label, id, value, type, onChange, placeHolder, blur, mandatory }) => {
    return (
        <div className={styles['form-control']}>
            <label type={type || 'text'} className={styles.label} htmlFor={id}>
                {label} {'\t'}
                <input onBlur={blur} className={styles.input} type={type} id={id} value={value} required placeholder={placeHolder} onChange={onChange} />
                <span className={styles.mandatory}>{mandatory}</span>
            </label>
        </div>
    )
}

export default Input