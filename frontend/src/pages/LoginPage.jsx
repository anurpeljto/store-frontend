import React from 'react'
import LoginBtn from '../components/Auth/Login/LoginBtn'

const LoginPage = () => {
  return (
    <div className='w-full h-full flex flex-col sm:mt-5 mt-10 items-center gap-5'>
        <span className='text-3xl font-bold text-blackTheme'>Log in</span>
        <div className='bg-cream h-auto sm:w-[500px] rounded-lg flex flex-col p-10 gap-5'>
            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Email</span>
                <input className='rounded-lg p-2 focus:outline-none' placeholder='johndoe@email.com' type="text" />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Password</span>
                <input className='rounded-lg p-2 focus:outline-none' placeholder='Enter password here' type="password" />
            </div>

            <LoginBtn/>
            <p className='text-sm'>Don't have an account yet? <br />Click <a className='font-bold underline' href="/register">here</a> to register</p>
        </div>
    </div> 
  )
}

export default LoginPage