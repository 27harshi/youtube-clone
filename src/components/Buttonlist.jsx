import React from 'react'
import Button from '../element/Button'

function Buttonlist() {
  const buttonlist = ["All", "mixes", "javascript", "movies", "cricket", "malayalam", "kannada", "yoga", "football", "worldcup", "live", "24news", "website"]
  return (
    <div className='flex items-center w-full gap-3 '>
      {
        buttonlist.map((btn, index) => (
          <div key={index}>
            <Button content={btn} />
          </div>
        ))
      }
    </div>
  )
}

export default Buttonlist