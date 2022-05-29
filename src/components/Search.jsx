import React from 'react'
import MusicPlayer from './MusicPlayer'

const Search = () => {
  return (
    <div className='search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]'>
        {/* left side */}
        <div className="left flex-1">
            <img src={require("../img/backgraphics.png")} alt="" className='absolute top-[22rem] left-[-47rem]' />
            <img src={require("../img/d1.png")} alt="" className='w-[16rem] top-[26rem] absolute' />
            <img src={require("../img/d2.png")} alt="" className='w-[9rem] absolute top-[32.7rem] left-[7rem]' />
            <img src={require("../img/d3.png")} alt="" className='absolute top-[33rem] left-[17rem] w-[9rem]' />
            <img src={require("../img/d4.png")} alt="" className='absolute w-[17rem] top-[50rem] left-[2rem]' />
        </div>
        {/* right side */}
        <div className="right items-start flex-col justify-start flex-1 h-[100%] pt[9rem]">
                {/* search */}
                <div className="searchbar flex justify-start mt-[9rem] w-[100%]">
                    <input type="text" placeholder='Enter the key word or the URL'  className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'/>
                    {/* search icon */}
                    <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                        <img src={require("../img/search.png")} alt="" className='w-[1.5rem]' />
                    </div>
                </div>
                {/*titled icon */}
                <div className="tild flex justify-start mt-7 items-center w-[100%]">
                    <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]' />
                </div>

                {/* paragraph */}
                <div className="detail flex flex-col mt-5 text-4xl">
                    <span>Search Music by</span>
                    <span>
                        <b>Name or Direct URL</b>
                    </span>
                    <span className="text-sm mt-3 text-[#4D586A]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum consequuntur mollitia voluptate <br /> molestias sapiente.
                    </span>
                </div>
                {/* music player */}
                <MusicPlayer />
        </div>
    </div>
  )
}

export default Search