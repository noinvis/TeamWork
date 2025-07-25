import React from 'react'
import { ONES } from '../static'

const SectionProps = () => {
  return (
    <section className='bg-[#FAF3EA] py-[100px] mt-[60px] mb-[30px]'>
      <div className='container flex items-center justify-between max-[1050px]:flex-wrap gap-[2rem]'>
        {
          ONES.map((item, inx) => (
            <div className='flex gap-[10px] items-center' key={inx}>
              <img src={item.img} alt="" />
              <div className='flex flex-col'>
                <p className='text-[20px] font-semibold'>{item.head}</p>
                <p className='text-[#898989] font-medium text-[18px]'>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SectionProps