import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Watchpage() {
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("d"));
    
    return (
        <div className='my-10 mx-10'>
            <iframe className='border rounded-[3%] ' width="900" height="460"
                src={"https://www.youtube.com/embed/" + searchparams.get("d")}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreeneen>

            </iframe>


        </div>
    )
}

export default Watchpage