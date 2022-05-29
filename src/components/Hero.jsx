import { React, useState } from 'react'
import DownloadAds from './DownloadAds'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from 'framer-motion'

const Hero = () => {
    const [elementIsVisble, setElementIsVisible] = useState(false)
    const bg = {
        true : {
            left : '7rem',
        },
        false : {
            left : '19rem'
        }
    }
    const musicPlayer = {
        true : {
            left : '490px',
        },
        false : {
            left : '400px'
        }
    }
    const rect = {
        true : {
            left : '25rem',
        },
        false : {
            left : '26rem'
        }
    }
    const heart = {
        true : {
            left : '23rem',
        },
        false : {
            left : '25.3rem'
        }
    }
  return (
    <VisibilitySensor onChange = {(isVisible) => setElementIsVisible(isVisible)} minTopValue={200}>
    <div className='wrapper bg-[#081730] flex items-center justify-between px-[3rem] rounded-b-[4rem] w-[100%] h-[35rem] relative z-[3]'>
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[2.5rem]">
            <span>Experience The</span> 
            <span><b>Best Quality Music</b></span>
            <span className='text-[15px] text-[#525D6E]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eius?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </span>
            {/* download ads */}
            <div>
                <span className='text-[13px]'>Download now on IOS and Android</span>
                <DownloadAds />
            </div>
        </div>
        {/* right side */}
        <div className="images relative w-[80%]">
            <motion.img variants={bg} animate={`${elementIsVisble}`} transition={{duration: 1, type: 'ease-out'}} src={require("../img/backgraphics.png")} alt="" className='absolute top-[5rem] left-[2rem]'/>
            <img src={require("../img/p 1.png")} alt="" className='relative top-[-1rem] left-[29rem] w-[15rem]'/>
            <motion.img variants={musicPlayer} animate={`${elementIsVisble}`} transition={{duration: 1, type: 'ease-out'}} src={require("../img/p 2.png")} alt="" className='absolute top-[285px] w-[160px] left-[486px]'/>
            <motion.img variants={rect} animate={`${elementIsVisble}`} transition={{duration: 1, type: 'ease-out'}} src={require("../img/p 3.png")} alt="" className='absolute w-[3rem] h-[3rem] left-[480px] top-[390px]'/>
            <motion.img variants={heart} animate={`${elementIsVisble}`} transition={{duration: 1, type: 'ease-out'}} src={require("../img/p 4.png")} alt="" className='absolute w-[4rem] h-[4rem] left-[469px] top-[380px]'/>
        </div>
    </div>
    </VisibilitySensor>
  )
}

export default Hero