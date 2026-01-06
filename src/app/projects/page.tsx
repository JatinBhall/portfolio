"use client"

import ProjectCard, { ProjectData } from '@/components/home/projectsSection/projectCard';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import projectsData from "@/data/projectsData.json"

function Page() {

  const router = useRouter();
  const projectComponents: Array<React.ReactNode> = []

  projectsData.map((project: ProjectData) => {
    projectComponents.push(<ProjectCard data={project} />);
  });


  return (
    <div className=''>
      <div className='max-width w-full flex flex-col items-start gap-[100px] mx-auto mb-[200px]' >
        {/* header */}
        <div className='flex flex-col justify-center items-start py-24'>
          <div className='flex justify-center items-center gap-[10px] '>
            <Link href={"/"} className='text-primaryText text-2xl font-bold leading-[28px]'>Home</Link>
            <p className='text-primaryText text-2xl font-bold leading-[28px]'>/</p>
            <p className='text-gray  text-2xl font-bold leading-[28px]'>Projects</p>
          </div>
          <div className='font-solway font-bold text-[52px] leading-16 text-primaryText mt-16'>Projects</div>
          <div className='text-xl leading-[28px] text-primaryText mt-6'>A selection of my work.</div>
        </div>

{/* projects */}
        <div className='flex flex-col justify-center items-center gap-[64px]'>
          {projectComponents}
        </div>

      </div>
    </div>
  )
}

export default Page