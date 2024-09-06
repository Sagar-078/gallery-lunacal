import React from 'react'
import question from '../assets/question.svg'
import boxImage from '../assets/box.svg'

const HelpImages = () => {
  return (
    <div className='w-[24px] flex flex-col gap-[90px]'>
        <img src={question} alt='' width={24} height={24}/>

        <img src={boxImage} alt='' width={24} height={30}/>
    </div>
  )
}

export default HelpImages