import React from 'react'
import '../css/blog.css'
import Navbar from '../components/navbar/Navbar';
import { Homee } from './homeblog/Homee'

const Blog = () => {
  return (
     <div className='blog'>
        <Navbar />
        <Homee />
        
      
     </div>
  )
}

export default Blog