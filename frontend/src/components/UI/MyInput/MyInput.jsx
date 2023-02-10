import React from 'react'
import styles from './my-input.module.css'
import { BiSend } from 'react-icons/bi'

const MyInput = ({ inputValue, onChange, placeholder, onClick }) => {

    return (
        <div className={styles.container}>
            <input
                type="text"
                className={styles.input}
                placeholder={placeholder}
                value={inputValue}
                onChange={e => onChange(e.target.value)}
            />
            <BiSend onClick={onClick} className={styles.icon} />
        </div>
    )
}

export default MyInput 