import React from 'react'
import CartProps from '../cart/cart-props/CartProps'
import SectionProps from '../cart/section-props/SectionProps'

const Checkout = () => {
  return (
    <>
        <CartProps title={"Checkout"}/>    
        <div className='container py-[63px] flex gap-[26px]'>
            <div className='w-[49%]'>
                <p className='text-[36px] font-semibold'>Billing details</p>
                <div className='flex gap-[30px] mt-[35px]'>
                    <div className='w-full'>
                        <p className='font-medium'>First name</p>
                        <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                    </div>
                    <div className='w-full'>
                        <p className='font-medium'>Last Name</p>
                        <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                    </div>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Company Name (Optional)</p>
                    <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Country / Region</p>
                    <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Street address</p>
                    <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Town / City</p>
                    <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Province</p>
                    <input type="text" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>ZIP code</p>
                    <input type="number" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Phone</p>
                    <input type="=number" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
                <div className='w-full mt-[36px]'>
                    <p className='font-medium'>Email address</p>
                    <input type="email" className='w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4'/>
                </div>
            </div>
            <div className='w-[50%] sticky top-0 z-30 '>
                <div className='flex justify-between'>
                    <p className='font-medium text-[24px]'>Product</p>
                    <p className='font-medium text-[24px]'>Subtotal</p>
                </div>
                <div className=''></div>
            </div>
        </div>
        <SectionProps />
    </>
  )
}

export default Checkout