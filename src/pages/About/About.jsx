import React from 'react'
import {Link} from "react-router-dom"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto foi feito com React JS no Front-end e Firebase no Back-end</p>
      
      <p>
        <span>Github: </span>
        <a href="https://github.com/miqueiasbelfort" style={{color: "blue"}}>Miqueias Belfort</a>
      </p>

      <p>
        <span>LinkedIn: </span>
        <a href="https://www.linkedin.com/in/miqueias-belfort/" style={{color: "blue"}}>miqueias-belfort</a>
      </p>

      <p>
        <span>Portfolio: </span>
        <a href="https://miqueiasbelfort.netlify.app/" style={{color: "blue"}}>Miqueias Web Developer</a>
      </p>

      <Link to="/posts/create" className='btn'>Criar Posts</Link>

    </div>
  )
}

export default About