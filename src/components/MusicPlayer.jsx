import React from 'react'

const MusicPlayer = () => {
  return (
    <div className='musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5'>
        {/* upper */}
        <div className="upperPart flex items-center justify-between">
            {/* profile */}
            <div className="profile flex">
                <img src={require("../img/Mask Group 23.png")} alt="" className='w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full' />
                <div className="details flex flex-col ml-4">
                    <span className='text-[1rem]'>Heavy is the head</span>
                    <span className='text-sm text-gray-500'>Stormzy</span>
                </div>
            </div>
            <div>
                <img src={require("../img/path.png")} alt="" className='h-[1rem]' />
            </div>
        </div>
        {/* lower */}
        <div className="lowerPart flex items-center justify-between mt-5">
            <div className="track flex justify-between text-sm text-gray-500 flex-[2] items-center">
                <span>2: 30</span>
                <img src={require("../img/Group 9.png")} alt="" className='w-[16rem]' />
                <span>4: 30</span>
            </div>
            {/* Controls */}
            <div className="controls flex flex-1 items-center justify-around">
                {/* previous arrow */}
            <svg width="10.455" height="12.442" viewBox="0 0 10.455 12.442"> <path d="M62.208,5.066,69.119.334A1.687,1.687,0,0,1,70.027,0c.517,0,.836.415.836,1.109V11.334c0,.693-.319,1.107-.835,1.107a1.673,1.673,0,0,1-.9-.335L62.211,7.376A1.419,1.419,0,0,1,61.52,6.22,1.414,1.414,0,0,1,62.208,5.066Z" transform="translate(-61.52 0)" fill="#4b537b" /> <rect id="Rectangle_15" data-name="Rectangle 15" width="1" height="12" rx="0.5" transform="translate(0.432 0.221)" fill="#4b537b" /> </svg>
                {/* pauseButton */}
                <svg
              width="12.327"
              height="16.417"
              viewBox="0 0 12.327 16.417"
              className="absolute"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="2.686"
                  y1="0.162"
                  x2="0"
                  y2="1.074"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f2061e" />
                  <stop offset="1" stop-color="#e600fd" />
                </linearGradient>
              </defs>
              <rect
                id="Rectangle_12"
                data-name="Rectangle 12"
                width="3.625"
                height="16.417"
                rx="1.813"
                transform="translate(0)"
                fill="url(#linear-gradient)"
              />
              <rect
                id="Rectangle_13"
                data-name="Rectangle 13"
                width="3.625"
                height="16.417"
                rx="1.813"
                transform="translate(8.701)"
                fill="url(#linear-gradient)"
              />
            </svg>
                
                {/* right arrow */}
            <svg width="10.455" height="12.442" viewBox="0 0 10.455 12.442"> <path id="Path_3" data-name="Path 3" d="M70.175,5.066,63.264.334A1.687,1.687,0,0,0,62.356,0c-.517,0-.836.415-.836,1.109V11.334c0,.693.319,1.107.835,1.107a1.673,1.673,0,0,0,.9-.335l6.914-4.731a1.419,1.419,0,0,0,.691-1.155A1.414,1.414,0,0,0,70.175,5.066Z" transform="translate(-61.52 0)" fill="#4b537b" /> <rect id="Rectangle_14" data-name="Rectangle 14" width="1" height="12" rx="0.5" transform="translate(9.455 0.221)" fill="#4b537b" /> </svg>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer