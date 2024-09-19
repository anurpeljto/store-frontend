import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SubmitProfile from './SubmitProfile';


const fetchUserDetails = async() => {
    const request = await axios({
        url:'http://full-store.onrender.com/api/v1/auth/get-user',
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
  return (
    <div className='sm:w-1/2 w-full h-full bg-cream rounded-lg sm:p-5 p-2 flex flex-col justify-start items-start gap-5'>
        <div className='flex flex-col justify-between w-full sm:px-2 px-5 gap-2'>
            <span className='font-bold text-lg'>Email</span>
            <input className='w-full rounded-lg p-2' type="text" name="" id="" placeholder={`${user.email}`}/>
        </div>

        <div className='flex sm:flex-row flex-col justify-between sm:px-2 px-5 w-full gap-5'>

            <div className='flex flex-1 flex-col gap-2'>
                <span className='font-bold text-lg'>First Name</span>
                <input className='w-full rounded-lg p-2' type="text" name="" id="" placeholder={`${user.first_name}`}/>
            </div>

            <div className='flex flex-col gap-2 flex-1'>
                <span className='font-bold text-lg'>Last Name</span>
                <input className='w-full rounded-lg p-2' type="text" name="" id="" placeholder={`${user.first_name}`}/>
            </div>
        </div>

        <SubmitProfile/>
    </div>
  )
}

export default Profile