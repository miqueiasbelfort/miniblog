import React from 'react'
import styles from "./Search.module.css"

import { Link } from 'react-router-dom'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import {useQuery} from "../../hooks/useQuery"

//components
import PostDetails from '../../components/PostDetails'

const Search = () => {

    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
      <h2>{search}</h2>
      <div className={styles.post}>
          {posts && posts.length === 0 && (
              <div className={styles.noposts}>
                <p>Nenhum Post foi encontrado...</p>
                <Link to="/" className={`btn btn-dark nopost`}>Voltar</Link>
              </div>
          )}
          {posts && posts.map(post => (
              <PostDetails 
                key={post.id}
                post={post}
              />
          ))}
      </div>
    </div>
  )
}

export default Search
