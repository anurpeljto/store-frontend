import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Categories from '../components/Categories/Categories'

const MainLayout = ({children}) => {
  return (
    <div className='p-5'>
        <Navbar />
        <Categories/>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout