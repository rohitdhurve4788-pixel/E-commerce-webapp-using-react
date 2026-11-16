import React from 'react'

const Loader = ({className}) => {
  return (
<div className={`${className}`} >
        <div className="flex flex-row gap-2">
  <div className="w-10 h-10 rounded-full bg-blue-700 animate-bounce"></div>
  <div className="w-10 h-10 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
  <div className="w-10 h-10  rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>
  )
}

export default Loader