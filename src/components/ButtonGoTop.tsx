'use client'
import { useEffect, useState } from 'react'
import { FaAngleUp  } from "react-icons/fa";

export default function ButtonGoTop() {

  const [showGoTop, setShowGoTop] = useState(false)
  
  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 50)
  }
  
  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  }, [])

  return (
    <button type='button' className={`fixed ${showGoTop ? 'block' : 'hidden'} bottom-5 right-9 z-10`} onClick={handleScrollUp}>
      <FaAngleUp  
        className='bg-white p-1 shadow-md w-10 h-10 rounded-full cursor-pointer transform transition-all hover:scale-125 shadow-green-900' 
        color='#008236'
        size={40} 
      />
    </button>
  )
}