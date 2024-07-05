'use client'

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import style from '../styles/InterestList.module.css';

const InterestList = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 500);
  const [showIcon, setShowIcon] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 500) {
        setShowIcon(true);
        setIsOpen(false); 
      } else {
        setShowIcon(false);
        setIsOpen(true); 
      }
    };

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <h1 className={style.title}>Intereses</h1>
        {showIcon && (
          <button className={style.buttonArrows} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
          </button>
        )}
      </div>
      {isOpen && (
        <ul className={style.lists}>
          <li className={style.ul}>Lorem ipsum dolor sit amet consectetur adipisicing elit lorem</li>
          <li className={style.ul}>Lorem ipsum dolor sit amet.</li>
          <li className={style.ul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reprehenderit, cum molestiae dolor aliquid ipsam.</li>
          <li className={style.ul}>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      )}
    </div>
  );
};

export default InterestList;
