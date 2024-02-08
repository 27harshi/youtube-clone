import React from 'react'
import Buttonlist from './Buttonlist'
import Videopage from './Videopage'

function MainContainer() {
    return (
        <div className='col-span-10 '>
            <Buttonlist/>
            <Videopage/>
        </div>
    )
}

export default MainContainer