import React from 'react'

const Hero = ({text}) => {
  return (
    <div className='hero'>{text}</div>
  )
}

export default React.memo(Hero)