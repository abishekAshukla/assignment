import React from 'react'

const Copyright = () => {
  return (
    <div className="flex justify-between px-20 h-20 items-center border-t-2 font-[400] flex-col md:flex-row text-center">
      <div className="text-[10px] mt-3 md:mt-0">
        © 2024 Copyright myfinder.ai | All Rights Reserved.
      </div>
      <div className="flex text-[10px] flex-col text-center md:flex-row my-2 md:my-0 pb-1">
        <p>About MyFinder</p>
        <p className="ml-3">My Community</p>
        <p className="ml-3">Attractions</p>
        <p className="ml-3">Privacy</p>
        <p className="ml-3">Helpcenter</p>
      </div>
    </div>
  )
}

export default Copyright
