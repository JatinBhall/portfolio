"use client"

import React from 'react'
import SectionHeading from '../../commonComponents/sectionHeading'
import SubHeading from '@/components/commonComponents/subHeading'
import LinkItemWrapper from './linkItemWrapper'
import LinkedIcon from '@/components/icons/linkedIcon'
import Image from 'next/image'
import ProfileArrowIcon from '@/components/icons/profileArrowIcon'
import ActionButton from '@/components/actionButton'
import DownloadIcon from '@/components/icons/downloadIcon'
import TopCornerAnimatedLines from '@/components/animatedLines/topCornerAnimatedLines'

const skills = ["NextJs", "ReactJs", "JavaScript", "HTML,CSS", "TypeScript", "Tailwind", "SQL"]

function AboutSection() {

  function handleDownloadResumeClick() {
    const link = document.createElement("a");
    link.href = "documents/Jatin_Bhall_Associate_Software_Engineer.pdf";
    link.download = "Jatin-Bhall-Resume.pdf"; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className='max-width flex flex-col justify-center items-center gap-[100px]'>
      <SectionHeading heading='About' />
      <div className='w-full grid md:grid-cols-2 gap-[50px]'>

        {/* photo */}
        <div className=' p-6'>
          <div className='max-w-[280px] flex flex-col items-center justify-center overflow-hidden pb-[200px] pt-5 max-md:mx-auto'>
            <div className='relative'>
              <Image className='rounded-full border-[3px] border-primaryText' src={"/images/3-modified.jpg"} height={119} width={119} alt='my picture' />
              <TopCornerAnimatedLines className='text-primaryText absolute -top-4 -left-4 rotate-[25deg]' />
            </div>
            <div className='w-full relative'>
              <ProfileArrowIcon className='absolute top-0 left-0 h-[240px] w-[240px] translate-x-12 -translate-y-1 text-primaryText' />
              <div className='absolute top-[42px] left-[120px] text-[32px] font-bold text-primaryText '>Yours Truly</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[64px]'>

          {/* Links */}
          <div className='flex flex-col gap-6'>
            <SubHeading subHeading='Links' className=' max-md:mx-auto' />
            <div className='flex gap-4 max-md:mx-auto'>
              <LinkItemWrapper href='https://www.linkedin.com/in/jatin-bhall-50715520a/'>
                <LinkedIcon className='max-w-6 max-h-6 text-primaryText' />
              </LinkItemWrapper>
            </div>
          </div>

          {/* Skills */}
          <div className='flex flex-col gap-6'>
            <SubHeading subHeading='Skills' className=' max-md:mx-auto' />
            <div className='text-primaryText max-md:max-w-[350px] flex max-md:justify-center flex-wrap gap-4  max-md:mx-auto'>
              {skills.map((skill: string, index: number) =>
                <div key={index} className='border-2 rounded-2xl border-primaryText text-2xl font-bold py-2 px-4'>{skill}</div>
              )}
            </div>
          </div>

          {/* Experience */}
          <div className='flex flex-col gap-6'>
            <SubHeading subHeading='Experience' className=' max-md:mx-auto' />
            <div className='flex flex-col gap-2  max-md:mx-auto max-md:px-4'>
              <SubHeading subHeading='Sookshum Labs, Mohali' className='!text-xl  max-md:mx-auto' />
              <p className='text-lg font-bold text-primaryText  max-md:mx-auto'>Javascript Developer <span className='text-gray xs:ms-3'>Sep 2023 – Sep 2025</span></p>
              <p className=' max-md:max-w-[400px] text-gray text-lg leading-[23px] text-justify  max-md:text-center '>
                Software Developer at a Technology Company.
                <br />
                Developed full-stack web applications using <b> Next.js (App Router, TypeScript), React, Tailwind CSS, and Supabase (PostgreSQL). </b>Collaborated with backend teams to integrate REST APIs and worked with UI/UX designers to implement responsive, pixel-perfect designs. Engaged in code reviews, performance optimization, and debugging to ensure high-quality, scalable code. Built responsive landing pages and followed best practices in version control with Git.
              </p>
            </div>
            {/* Button */}
            <div className='max-md:mx-auto mr-auto'>
              <ActionButton onClick={handleDownloadResumeClick}>
                <div className='flex justify-center items-center gap-1'>
                  <DownloadIcon className='h-6 w-6 text-primaryText' />
                  <p className='text-2xl font-bold text-primaryText'>Download Resume</p>
                </div>
              </ActionButton>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSection