import { useNavigate } from 'react-router-dom'
import img from '../detail-product/images/Group.png'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-[2rem]'>
      <h1 className='text-[50px]'>Oops!</h1>
      <p className='text-[24px]'>You are lost</p>
      <img src={img} alt="" className='p'/>
      <div className="flex gap-[2rem]">
        <button onClick={() => navigate("/")} className="p-[10px] text-white bg-[#0B57D0] rounded-[24px]">Go Home</button>
        <button onClick={() => navigate(-1)} className="p-[10px] text-white bg-[#0B57D0] rounded-[24px]">Go back</button>
      </div>
    </div>
  )
}

export default NotFound