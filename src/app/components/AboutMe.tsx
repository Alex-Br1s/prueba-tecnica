'use client'

import React, {useState, useEffect} from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import style from '../styles/AboutMe.module.css'

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 500)
  const [showIcon, setShowIcon] = useState(window.innerWidth < 500)

  useEffect(() => {
    const handleSize = () => {
      if(window.innerWidth < 500){
        setShowIcon(true)
        setIsOpen(false)
      }else {
        setShowIcon(false)
        setIsOpen(true)
      }
    }
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  },[])

  return (
    <section className={style.container}>
      <div className={style.subContainer}>
        <h1 className={style.title}>Sobre mi</h1>
        {showIcon && (
          <button className={style.buttonArrows} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
        </button>
        )}
      </div>
        {isOpen && (
        <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto minima voluptates ipsam adipisci, commodi nesciunt fugit, assumenda deserunt dolorum eveniet perferendis voluptatum, ducimus pariatur repudiandae quidem. Voluptatem rem error quas sapiente rerum labore quos minima accusantium impedit suscipit, iusto cupiditate deleniti illum debitis tempora assumenda perspiciatis mollitia. Aut, saepe error.</p>
        )}
    </section>
  )
}

export default AboutMe