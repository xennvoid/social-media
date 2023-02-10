import React, { useEffect, useState } from 'react'
import styles from './post.module.css'
import { BsThreeDots } from 'react-icons/bs'
import {
    AiFillLike,
    AiOutlineLike,
    AiOutlineComment,
    AiOutlineShareAlt
} from 'react-icons/ai'

import ProfileLink from '../../profileLink/ProfileLink'
import MyInput from '../../UI/MyInput/MyInput'
import Comment from '../../comment/Comment'
import axios from 'axios'
import moment from 'moment'


const Post = ({ post, commentsVisiblePost, setCommentsVisiblePost }) => {

    const [comments, setComments] = useState([])
    const [commentsCount, setCommentsCount] = useState(0)
    const [currentComment, setCurrentComment] = useState('')
    const postCreationDate = moment(post.createdAt).fromNow()

    const liked = true;

    useEffect(() => {

        const getPostCommentsCount = async () => {
            const url = `http://localhost:5151/api/comments/post/${post.id}/count`
            const response = await axios.get(url).catch(err => console.log(err))
            setCommentsCount(response.data)
        }

        getPostCommentsCount()

        const getPostComments = async () => {
            const url = `http://localhost:5151/api/comments/post/${post.id}`
            const response = await axios.get(url).catch(err => console.log(err))
            setComments(response.data)
        }

        getPostComments()
    }, [])

    const changeComment = (value) => {
        setCurrentComment(value)
    }

    const toggleComments = () => {
        commentsVisiblePost.id === post.id
            ? setCommentsVisiblePost(post => ({ ...post, opened: !post.opened }))
            : setCommentsVisiblePost({ id: post.id, opened: true })
    }

    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <div className={styles.profile}>
                    <ProfileLink
                        to={`/profile/${post.userId}`}
                        name={post.userName}
                        image={post.profileImage}
                    />
                    <span className={styles.time}>{postCreationDate}</span>
                </div>
                <div className={styles.settings}>
                    <BsThreeDots />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    {post.description}
                </div>
            </div>
            <div className={styles.actions}>
                <div className={styles.action}>
                    {liked ? <AiFillLike /> : <AiOutlineLike />}
                    <span>2k Likes</span>
                </div>
                <div className={styles.action}>
                    <AiOutlineComment
                        onClick={() => toggleComments()}
                    />
                    <span>{commentsCount == 1 ? commentsCount + " Comment" : commentsCount + " Comments"}</span>
                </div>
                <div className={styles.action}>
                    <AiOutlineShareAlt />
                    <span>Share</span>
                </div>
            </div>
            {
                (commentsVisiblePost.id == post.id && commentsVisiblePost.opened) &&
                <div className={styles.comments}>
                    <div className={styles.comment_write}>
                        <ProfileLink
                            to={`/profile/${post.userId}`}
                            name={post.userName}
                            image={post.profileImage}
                        />
                        <MyInput
                            placeholder="Your comment..."
                            inputValue={currentComment}
                            onChange={changeComment}
                            onClick={() => console.log(currentComment)}
                        />
                    </div>
                    {comments && comments.map(comment =>
                        <Comment comment={comment} key={comment.id} />
                    )}
                </div>
            }
        </div>
    )
}

export default Post