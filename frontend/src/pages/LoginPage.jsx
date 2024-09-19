import React, {useState} from 'react'
import LoginBtn from '../components/Auth/Login/LoginBtn'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const login = async(email, password, navigate) => {
  try {
    const request = await axios({
      method:'post',
      url: 'https://full-store.onrender.com/api/v1/auth/login',
      data: {
        email: email,
        password: password
      },
      withCredentials: true
    });

    const success = request.data.success;
    const name = request.data.first_name;
    localStorage.setItem('first_name', name);
    console.log(request.data);
    if(success) {
      navigate('/profile')
    }
  } catch (error) {
    alert(error.response.data.message);
  }
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    login(email,password,navigate);
  }
  return (
    <div className='w-full h-full flex flex-col sm:mt-5 mt-10 items-center gap-5'>
        <span className='text-3xl font-bold text-blackTheme'>Log in</span>
        <div className='bg-cream h-auto sm:w-[500px] rounded-lg flex flex-col p-10 gap-5'>
            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Email</span>
                <input onChange={handleChangeEmail} className='rounded-lg p-2 focus:outline-none' placeholder='johndoe@email.com' type="text" />
            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-lg text-blackTheme'>Password</span>
                <input onChange={handleChangePassword} className='rounded-lg p-2 focus:outline-none' placeholder='Enter password here' type="password" />
            </div>

            <LoginBtn onClick={handleLogin}/>
            <p className='text-sm'>Don't have an account yet? <br />Click <a className='font-bold underline' href="/register">here</a> to register</p>
        </div>
    </div> 
  )
}

export default LoginPage