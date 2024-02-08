import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Videopage() {
  const [Video, setVideo] = useState([]);
  useEffect(() => { getData() }, [])
  async function getData() {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCBXtKnmTjMPov89M0uM51BabN1si3Nmbk&maxResults=50")
    const json = await data.json()
    setVideo(json.items);
  }

  return (
    <div className='flex  gap-3 flex-wrap mt-4'>
      {console.log(Video)}
      {
        Video.map((vdo) => {
          return (
           
            <div key={vdo.id} className='w-[32%] h-[40%] mt-2 cursor-pointer '>
            <Link to={"/watch?d=" + vdo.id}>
              <img src={vdo.snippet.thumbnails.medium?.url} alt=""
                className='rounded-xl hover:rounded-none duration-700 ' />
              <div className='flex gap-2 mt-3'>
                <img src={vdo.snippet.thumbnails.medium?.url} alt={vdo.snippet.title}
                  className='h-8 w-8 bg-red-950 rounded-full' />
                <div className='flex flex-col'>
                  <h6 className='text-[10.5px] font-semibold w-[300px]'>{vdo.snippet.title}</h6>
                  <h6 className="text-[9.5px]">{vdo.snippet?.channelTitle}</h6>
                  <h6 className='text-[9.5px]'>
                    {((vdo.statistics.viewCount) / 1000000) > 1 ?
                      ((vdo.statistics.viewCount) / 1000000).toFixed(2) + "M views" :
                      ((vdo.statistics.viewCount) / 100000).toFixed(2) + "K views"}</h6>
                </div>

              </div>
            </Link>
          </div>

          )
        })
      }
    </div>
  )
}

export default Videopage