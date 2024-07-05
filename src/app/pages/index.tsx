import React from 'react'
import style from '../styles/index.module.css'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import InterestList from '../components/InterestList'

const Main = () => {
  return (
    <section className={style.container}>
        <Profile />
        <div className={style.subContainer}>
        <AboutMe />
        <InterestList />
        </div>
    </section>
  )
}

export default Main