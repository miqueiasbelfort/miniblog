import React from 'react'
import styles from "./Post.module.css"

//hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const {id} = useParams()
    const {document: post, loading} = useFetchDocument("posts", id)

  return (
    <div className={styles.post_container}>
        {loading && <p>Carregando...</p>}
        {post && (
            <>
                <img src={post.image} alt={post.title} />
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <h3>Este poste trata sobre:</h3>
                <div className={styles.tags}>
                    {post.tagsArray.map(tag => (
                        <p key={tag}><span>#</span>{tag}</p>
                    ))}
                </div>
            </>
        )}
    </div>
  )
}

export default Post