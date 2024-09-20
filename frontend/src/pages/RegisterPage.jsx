import React, { useState } from 'react'
import LoginBtn from '../components/Auth/Login/LoginBtn'
import RegisterBtn from '../components/Auth/Register/RegisterBtn'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const registerFunc = async(email, password, first_name, last_name, navigation) => {
    try {
        const result = await axios({
            url: 'https://full-store.onrender.com/api/v1/auth/register',
            method:'post',
            withCredentials: true,
            data: {
                email: email,
                password: password,
                first_name: first_name,
                last_name: last_name
            }
        });

        const response = result.data;   
        const token = response.token;
        localStorage.setItem('token', token);  
        navigation('/');
        return response;
    } catch (error) {
        return error
    }

}


const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigation = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }


    const pressRegister = () => {
        registerFunc(email, password, firstName, lastName, navigation);
    }
  return (
    <div className='w-full h-full flex flex-col sm:mt-5 mt-10 items-center gap-5'>
        <span className='text-3xl font-bold text-blackTheme'>Register</span>
        <div className='bg-cream h-auto sm:w-[500px] rounded-lg flex flex-col p-10 gap-5'>
            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Email</span>
                <input onChange={handleChangeEmail} className='rounded-lg p-2 focus:outline-none' placeholder='johndoe@email.com' type="text" />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>First name</span>
                <input onChange={handleChangeFirstName} className='rounded-lg p-2 focus:outline-none' placeholder='John' type="text" />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Last name</span>
                <input onChange={handleChangeLastName} className='rounded-lg p-2 focus:outline-none' placeholder='Doe' type="text" />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Password</span>
                <input onChange={handleChangePassword} className='rounded-lg p-2 focus:outline-none' placeholder='Enter password here' type="password" />
            </div>

            <RegisterBtn onClick={pressRegister}/>
            <p className='text-sm'>Already have an account? <br />Click <a className='font-bold underline' href="/login">here</a> to log in</p>
        </div>
    </div> 
  )
}

export default RegisterPage