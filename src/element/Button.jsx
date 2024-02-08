import React from 'react'

function Button(prop) {
  return (
    <button className='px-3 py-[3px] rounded-lg 
             bg-gray-100 font-semibold capitalize'>
      {prop.content}
    </button>
  )
}

export default Button