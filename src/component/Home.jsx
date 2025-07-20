import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#6C63FF] via-[#7F00FF] to-[#E100FF] h-[100%]'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home