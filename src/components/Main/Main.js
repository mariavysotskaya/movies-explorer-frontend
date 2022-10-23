import { useRef } from 'react'
import './Main.css'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import NavTab from '../NavTab/NavTab'

export default function Main() {
  const aboutRef = useRef(null);
  const techsRef = useRef(null);
  const studentRef = useRef(null);

  const sections = [
    {
      title: 'О проекте',
      ref: aboutRef
    },
    {
      title: 'Технологии',
      ref: techsRef
    },
    {
      title: 'Студент',
      ref: studentRef
    }
  ]

  return (
    <div className="main">
      <Promo>
        <NavTab initialData={sections}/>
      </Promo>
      <AboutProject aboutRef={aboutRef}/>
      <Techs techsRef={techsRef}/>
      <AboutMe studentRef={studentRef}/>
      <Portfolio />
    </div>
  )
}