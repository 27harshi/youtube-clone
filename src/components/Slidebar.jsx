import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { TbUserSquare } from "react-icons/tb";
import { MdHistory } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Sidebar from './Sidebar';

function SlideBar() {
    const isMenuopen = useSelector((store) => store.app.isMenuopen)
    // if (!isMenuopen) return null;

    return !isMenuopen?<Sidebar/>:(
        <div className='col-span-1'>
            <ul className='capitalize'>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < GoHomeFill className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>home</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < SiYoutubeshorts className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>shorts</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < MdOutlineSubscriptions className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>subscriptions</h1>
                </li>

            </ul>
            <hr className='ml-5 mt-3 mr-9' />
            {/* ------------------------------- */}
            <ul className='capitalize'>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    <h1 className='py-2  text-sm font-semibold'>You</h1>
                    < MdOutlineKeyboardArrowRight className='text-xl  ' />
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < TbUserSquare className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>your channel</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < MdHistory className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>history</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < BsPlayBtn className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>your videos</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < IoMdTime className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>watch later</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < LiaDownloadSolid className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>Downloads</h1>
                </li>
                <li className='cursor-pointer flex ml-3  items-center hover:bg-gray-100 mr-8 rounded-xl pl-5'>
                    < MdKeyboardArrowDown className='text-xl' />
                    <h1 className='p-2 pl-5 text-sm'>show more</h1>
                </li>

            </ul>
            <hr className='ml-5 mr-9' />
        </div>
    )
}

export default SlideBar