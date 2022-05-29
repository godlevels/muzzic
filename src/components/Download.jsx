import React from 'react'
import DownloadAds from './DownloadAds'

const Download = () => {
  return (
    <div className='flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]'>
        {/*tild icon */}
        <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]'/>
        {/* heading */}
        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>Download The Best Music</span>
            <span>
                <b>App Now</b>
            </span>
            <span className='text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti enim voluptatem facilis laborum modi!
            </span>
        </div>
        <div className="mt-14">
            <DownloadAds />
        </div>
    </div>
  )
}

export default Download