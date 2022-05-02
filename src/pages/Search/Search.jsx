import React from 'react'
import styles from "./Search.module.css"

import { Link } from 'react-router-dom'

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocument'
import {useQuery} from "../../hooks/useQuery"

//components
import PostDetails from '../../components/PostDetails'

const Search = () => {

    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div>
      <h2>Search</h2>
      <div>
          {posts && posts.length === 0 && (
              <>
                <p>Nenhum Post foi encontrado</p>
                <Link to="/" className="btn btn-dark">Voltar</Link>
              </>
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
