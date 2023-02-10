import React from 'react'
import { Link } from 'react-router-dom'
import styles from './profile-link.module.css'
import userPng from '../../assets/icons/user.png'

const ProfileLink = ({ to, image, name }) => {

    return (
        <Link to={to} className={styles.link}>
            <img src={image == null ? userPng : image} alt={name} className={styles.image} />
            <span className={styles.name}>{name}</span>
        </Link>
    )
}

export default ProfileLink