import React from 'react'

const Feature = ({ icon, title }) => {
  return (
    <div className='feature flex items-center justify-center flex-col relative mx-12'>
        <div>
            {/* icon */}
            <div className="icon bg-[#081730] rounded-2xl p-4">
                <img src={require(`../img/${icon}.png`)} alt="" className='w-[1.5rem]' />
            </div>
        </div>
        <span className="mt-5">{title}</span>

        <span className='text-[#707070] mt-4 ml-[1rem] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id tempore neque numquam non error?
        </span>

        <span className='text-[#E600FF] underline mt-[3rem] hover:cursor-pointer flex'>Learn More</span>
    </div>
  )
}

export default Feature