import React, {useEffect, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { setSearchTerm } from '../../redux/search/searchSlice';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');


  const handleOnChangeTerm = (e) => {
    setTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(setSearchTerm(term));
  }, [term, dispatch]);

  return (
    <div className='sm:w-[350px] h-[30px] bg-gray-200 sm:flex hidden flex-row justify-between items-center p-5 rounded-lg gap-2' >
        <FaSearch fill='#a4a4a4' className='h-[100px]'/>
        <input onChange={handleOnChangeTerm} className='w-full focus:outline-none cursor-text text-grayTheme bg-gray-200 placeholder-grayTheme' placeholder='Search...' onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder='Search...'} />
    </div>
  )
}

export default SearchBox