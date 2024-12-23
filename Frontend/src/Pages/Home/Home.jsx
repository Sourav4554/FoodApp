import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay';
import { Appdownload } from '../../Components/Appdownload/Appdownload';

const Home = () => {
  const [category,setCategory]=useState('All');
  return (
    <div className='home'>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay  category={category} />
        <Appdownload/>
    </div>
  )
}

export default Home