import React, { useContext, useReducer, useState } from 'react'
import styles from './navbar.module.scss'
import Search from '../search/Search'
import { BiUser, BiMessageRounded, BiLogOut } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import ProfileLink from '../profileLink/ProfileLink'

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const icons = [
        <BiUser />,
        <BiMessageRounded />,
        <IoMdNotificationsOutline />,
    ]

    const signOut = () => {
        setCurrentUser(null)
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    SM
                </Link>
            </div>
            <div className={styles.search}>
                <Search value={searchQuery} setValue={setSearchQuery} placeholder="Search for friends" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {icons.map((icon, i) =>
                        <li className={styles.list_item} key={i}>
                            <Link to="/">
                                {icon}
                            </Link>
                        </li>
                    )}
                    <li className={styles.list_item}>
                        <ProfileLink
                            to={`/profile/${currentUser.id}`}
                            name={currentUser.name}
                            image={currentUser.profileImage}
                        />
                    </li>
                    <li className={styles.list_item}>
                        <BiLogOut onClick={signOut} cursor="pointer" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar