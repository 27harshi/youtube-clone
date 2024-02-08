import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";


function Sidebar() {
    return (
        <ul className='flex flex-col col-span-1 '>
            <li className='cursor-pointer hover:bg-gray-100 w-14 h-14 ml-4 mt-1   flex flex-col justify-center items-center'>
                < GoHomeFill className='text-xl' />
                <h1 className='text-[9px]'>Home</h1>
            </li>
            <li className='cursor-pointer hover:bg-gray-100 w-14 h-14 ml-4 mt-1   flex flex-col justify-center items-center'>
                < SiYoutubeshorts className='text-xl' />
                <h1 className='text-[9px]'>shorts</h1>
            </li><li className='cursor-pointer hover:bg-gray-100 w-14 h-14 ml-4 mt-1   flex flex-col justify-center items-center'>
                < MdOutlineSubscriptions className='text-xl' />
                <h1 className='text-[9px]'>subscriptions</h1>
            </li><li className='cursor-pointer hover:bg-gray-100 w-14 h-14 ml-4 mt-1   flex flex-col justify-center items-center'>
                < BsPlayBtn className='text-xl' />
                <h1 className='text-[9px]'>you</h1>
            </li>

        </ul>
    )
}

export default Sidebar