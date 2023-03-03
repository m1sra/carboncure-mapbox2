import React, { FC } from 'react'
import MapScroll from '../components/MapScroll';
import Map from '../components/MapScroll';
import ScrollApp from '../components/ScrollApp';

const Home:FC = () => {
  return (
    <>
    <div className='page'>
      {/* <img src='icons/logo.svg' alt="logo" className='logo'></img>
      <p className='foot-page'>Copyright, 2023: CarbonCure</p> */}
      <ScrollApp />
      {/* <MapScroll /> */}
    </div>
    </>
    
  )
}
export default Home;