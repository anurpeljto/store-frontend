import React from 'react'
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
  const first_name = localStorage.getItem('first_name');
  return (
    <div className='w-full h-screen sm:pt-5 pt-10 flex flex-col justify-center bg-cream items-center'>
        <span className='font-bold text-3xl mb-4'>Welcome, {first_name}</span>
        <Profile/>
    </div>
  )
}

export default ProfilePage