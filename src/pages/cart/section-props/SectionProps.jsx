import React, { memo } from 'react'
import { ONES } from '../static'

const SectionProps = () => {
  return (
    <section className='bg-[#FAF3EA] py-[100px] mt-[60px] mb-[30px] max-[550px]:py-[50px]'>
      <div className='container grid grid-cols-4 max-[1050px]:grid-cols-2 max-[550px]:grid-cols-1 max-[550px]:place-items-center gap-[2rem]'>
        {
          ONES.map((item, inx) => (
            <div className='flex gap-[10px] items-center max-[550px]:flex-col' key={inx}>
              <img src={item.img} alt="" />
              <div className='flex flex-col'>
                <p className='text-[20px] font-semibold max-[550px]:text-center'>{item.head}</p>
                <p className='text-[#898989] font-medium text-[18px] max-[550px]:text-center'>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default memo(SectionProps)