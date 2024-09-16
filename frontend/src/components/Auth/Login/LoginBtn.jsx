import React from 'react'

const LoginBtn = ({onClick}) => {
  return (
    <div onClick={onClick} className='bg-yellow cursor-pointer p-5 w-[100px] h-[50px] flex items-center justify-center rounded-lg'>
        <span className='font-bold'>Log in</span>
    </div>
  )
}

export default LoginBtn