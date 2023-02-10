import React from 'react'
import styles from './rightbar.module.scss'
import userImg from '../../assets/icons/user.png'

const Rightbar = () => {

    const friendsOnline = ["Ben", "Sam", "Andrew", "Sarah", "Anna"]

    return (
        <div className={styles.container}>
            <div className={styles.friends + " " + styles.card}>
                <h3 className={styles.title}>Friends Online</h3>
                {friendsOnline.map((friend, i) =>
                    <div className={styles.friend} key={i}>
                        <img src={userImg} className={styles.profile_image} alt="User image" />
                        <span>{friend}</span>
                    </div>
                )}
            </div>
            <div className={styles.suggestions + " " + styles.card}>
                <h3 className={styles.title}>Suggestions</h3>
                {friendsOnline.map((friend, i) =>
                    <div className={styles.friend} key={i}>
                        <img src={userImg} className={styles.profile_image} alt="User image" />
                        <span>{friend}</span>
                    </div>
                )}
            </div>
            <div className={styles.activities + " " + styles.card}>
                <h3 className={styles.title}>Latest activities</h3>
                {friendsOnline.map((friend, i) =>
                    <div className={styles.friend} key={i}>
                        <img src={userImg} className={styles.profile_image} alt="User image" />
                        <span>{friend} created new post 5 minutes ago</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Rightbar