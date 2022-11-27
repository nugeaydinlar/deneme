import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../css/blog.css'

const Blog = () => {
  return (
     <div className='blog'>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="blog__container">
          <h2>Blog sayfası</h2> 
        </div>
        
      
     </div>
  )
}

export default Blog