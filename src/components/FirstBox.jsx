import React from 'react'
import HelpImages from './HelpImages'
import FirstBoxData from './FirstBoxData'

const FirstBox = () => {
  return (
    <div className='w-[100%] h-[50%] flex items-center flex-col'>
        <div className='w-full h-full bg-customGray1 rounded-[27px] shadow-lg shadow-zinc-900'>

          <div className=' flex flex-row pt-5 pl-4 gap-4'>
              
            <HelpImages/>
            <FirstBoxData/>
          </div>

        </div>
        <div className=' w-full h-[5%] flex justify-center items-center flex-col mt-2'>
            <div className="w-[85%] bg-[#363C43] h-[4px] rounded-full shadow-lg shadow-black"/>
            <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[1px]" />
        </div>
    </div>
  )
}

export default FirstBox