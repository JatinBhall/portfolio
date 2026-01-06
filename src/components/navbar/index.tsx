import React from 'react'
import NavItemWrapper from './navItemWrapper'
import HomeIcon from '../icons/homeIcon'
import ProjectsIcon from '../icons/projectsIcon'
import AboutIcon from '../icons/aboutIcon'
import ContactIcon from '../icons/contactIcon'

function Navbar() {
  return (
    <div
      style={{
        boxShadow: "rgba(114,98,218,0.118) 0px 0.636953px 1.4013px -0.9375px, rgba(114,98,218,0.11) 0px 1.9316px 4.24953px -1.875px, rgba(114,98,218,0.094) 0px 5.10612px 11.2335px -2.8125px, rgba(114,98,218,0.04) 0px 16px 35.2px -3.75px",
      }}
      className='fixed bottom-5 left-1/2 -translate-x-1/2 bg-white border-borderLight border-2 rounded-3xl px-4'>
      <div className='flex gap-4'>
        <NavItemWrapper link='/#home' toolTip={"Home"} >
          <HomeIcon className='h-[30px] w-[30px] text-inherit' />
        </NavItemWrapper>
        <NavItemWrapper link='/projects' toolTip={"Projects"} >
          <ProjectsIcon className='h-[30px] w-[30px] text-inherit' />
        </NavItemWrapper>
        <NavItemWrapper link='/about' toolTip={"About"} >
          <AboutIcon className='h-[30px] w-[30px] text-inherit' />
        </NavItemWrapper>
        <NavItemWrapper link='/#contact' toolTip={"Contact"} >
          <ContactIcon className='h-[30px] w-[30px] text-inherit' />
        </NavItemWrapper>
      </div>
    </div>
  )
}

export default Navbar