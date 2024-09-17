import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SubmitProfile from './SubmitProfile';


const fetchUserDetails = async() => {
    const request = await axios({
        url:'http://localhost:3000/api/v1/auth/get-user',
        method: 'get',
        withCredentials:true
    });
    const user = request.data.user;
    return user;
}

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUserDetails = async() => {
            const userDetails = await fetchUserDetails();
            setUser(userDetails);
        };
        getUserDetails();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }
    console.log(user);
  return (
    <div className='w-1/2 h-full bg-cream rounded-lg p-5 flex flex-col justify-start items-start gap-5'>
        <div className='flex flex-col justify-between w-full px-10 gap-2'>
            <span className='font-bold text-lg'>Email</span>
            <input className='w-full rounded-lg p-2' type="text" name="" id="" placeholder={`${user.email}`}/>
        </div>

        <div className='flex flex-row justify-between w-full px-10'>

            <div className='flex flex-col gap-2'>
                <span className='font-bold text-lg'>First Name</span>
                <input className='w-full rounded-lg p-2' type="text" name="" id="" placeholder={`${user.first_name}`}/>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='font-bold text-lg'>Last Name</span>
                <input className='w-full rounded-lg p-2' type="text" name="" id="" placeholder={`${user.first_name}`}/>
            </div>
        </div>

        <SubmitProfile/>
    </div>
  )
}

export default Profile