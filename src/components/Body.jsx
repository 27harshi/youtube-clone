import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBar from './Slidebar'

function Body() {
    return (
        <div className='grid grid-flow-col w-[100%]'>
            <SlideBar/>
            {/* <MainContainer /> */}
            <Outlet/>
        </div>
    )
}

export default Body