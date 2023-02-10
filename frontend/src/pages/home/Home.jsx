import React from 'react'
import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import styles from './home.module.scss'

const Home = () => {

    return (
        <div className={styles.container}>
            <Stories />
            {/* <Posts /> */}
        </div>
    )
}

export default Home