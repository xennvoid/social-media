import React from 'react'
import styles from './leftbar.module.scss'
import { AiOutlineUser } from 'react-icons/ai'

const Leftbar = () => {

    const navigationItems = [
        { icon: <AiOutlineUser />, text: "Friends" },
        { icon: <AiOutlineUser />, text: "Profile" },
        { icon: <AiOutlineUser />, text: "Marketplace" },
        { icon: <AiOutlineUser />, text: "Watch" },
        { icon: <AiOutlineUser />, text: "Memories" },
    ]

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    {navigationItems.map((item, i) =>
                        <li key={i}>
                            {item.icon}
                            <span>{item.text}</span>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Leftbar