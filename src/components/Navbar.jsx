import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { togglemenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

function Navbar() {
    const dispatch = useDispatch()
    function toggleMenuHandler() {
        dispatch(togglemenu())
    }
    return (
        <div className='grid grid-flow-col py-2 shadow-sm items-center  border-red-600 w-[100%]  '>
            <div className='flex col-span-1 items-center'>
                <HiOutlineBars3 className='ml-4 text-xl font-semibold cursor-pointer'
                    onClick={() => toggleMenuHandler()} />
                {/* <Link to={"/"}> */}
                <img className='h-4 mx-2 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="" />
                {/* </Link> */}
            </div>
            <div className='col-span-10 px-10 flex ml-40'>
                <input type="text" placeholder='Search'
                    className='w-[72%] border border-gray-400 p-1 rounded-l-full outline-none  pl-8' />
                <button className='cursor-pointer border border-gray-400 px-5 rounded-r-full bg-gray-100'><IoIosSearch className='text-2xl font-semibold' /></button>
            </div>
            <h1 className='cursor-pointer col-span-1 h-8 w-8 bg-orange-400 rounded-full flex text-white items-center justify-center'>H</h1>
        </div>
    )
}

export default Navbar