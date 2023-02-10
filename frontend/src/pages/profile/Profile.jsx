import React, { useEffect, useState } from 'react'
import Posts from '../../components/posts/Posts'
import styles from './profile.module.css'
import { SlSettings } from 'react-icons/sl'
import { useLocation, useParams } from 'react-router-dom'
import { sendRequest } from '../../requestPattern'
import { useQuery } from 'react-query'

const Profile = () => {

    const { pathname } = useLocation()
    const { id: profileId } = useParams()
    //const [posts, setPosts] = useState([])

    /* useEffect(() => {

        const getCurrentUserPosts = async () => {
            const url = `posts/user/${profileId}`
            const response = await sendRequest(url).catch(err => console.log(err))
            setPosts(response.data)
        }

        getCurrentUserPosts()
    }, [pathname]) */

    const url = `posts/user/${profileId}`
    const { isLoading, error, data: posts, isFetching, refetch } = useQuery("posts", () => sendRequest(url).then(res => res.data))

    useEffect(() => {
        refetch()
    }, [pathname])


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img
                    src="https://adoption.microsoft.com/files/microsoft-teams/custom-backgrounds-gallery/community/nature/community-nature-Teams-background-18.jpg"
                    alt="user-background"
                    className={styles.background}
                />
                <div className={styles.info}>
                    <div className={styles.left}>
                        Left
                    </div>
                    <div className={styles.center}>
                        <div className={styles.image}>
                            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                        </div>
                        <div className={styles.name}>BEN</div>
                    </div>
                    <div className={styles.right}>
                        <SlSettings size={24} cursor="pointer" />
                    </div>
                </div>
            </div>
            {error
                ? "Loading data error"
                : isLoading
                    ? "Loading"
                    : <Posts posts={posts} />
            }
        </div>
    )
}

export default Profile