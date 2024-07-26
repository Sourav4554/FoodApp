import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'

const Home = () => {
  const [category,setCategory]=useState('All');
  return (
    <div className='home'>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home