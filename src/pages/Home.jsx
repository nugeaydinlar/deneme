import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'
import Mekanlarcomp from '../components/mekanlarComp/Mekanlarcomp'




function Home() {
  return (
    <div className='Home'>
        <Navbar />
        <Slider />
        <Mekanlarcomp />
       
       
    </div>
  )
}

export default Home