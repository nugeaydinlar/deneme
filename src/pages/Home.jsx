import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Partner from '../components/partner/Partner'
import Slider from '../components/slider/Slider'


function Home() {
  return (
    <div className='Home'>
        <Navbar />
        <Slider />
    
        <Partner />
    </div>
  )
}

export default Home