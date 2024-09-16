import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Categories from '../components/Categories/Categories'
import MobileMenu from '../components/Categories/MobileMenu'
import { useSelector } from 'react-redux'

const MainLayout = ({children}) => {  
  const visible = useSelector((state) => state.menu.menu);

  return (
    <div className='sm:p-5 w-full'>
        <Navbar/>
        <Categories/>
        <MobileMenu isVisible={visible}/>
        <main>{children}</main>
    </div>
  )
}

export default MainLayout