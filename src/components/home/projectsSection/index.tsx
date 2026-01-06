"use client"

import SectionHeading from '@/components/commonComponents/sectionHeading'
import React from 'react'
import projectsData from "@/data/projectsData.json"
import ProjectCard, { ProjectData } from './projectCard'
import ActionButton from '@/components/actionButton'
import RightArrowIcon from '@/components/icons/rightArrowIcon'
import { useRouter } from 'next/navigation'

function ProjectsSection() {

    const router = useRouter();
    const projectComponents: Array<React.ReactNode> = []

    projectsData.map((project: ProjectData) => {
        projectComponents.push(<ProjectCard key={project.uid} data={project} />);
    });

    function handleViewAllProjectsClick() {
        router.push("/projects")
    }

    return (
        <div className='w-full flex justify-center items-center overflow-hidden '>
            <div className='max-width flex flex-col justify-center items-center gap-[100px]'>
                <SectionHeading heading='Projects' />
                <div className='flex flex-col justify-center items-center gap-[64px]'>
                    {projectComponents}
                </div>
                {/* Button */}
                <div className='max-md:mx-auto '>
                    <ActionButton onClick={handleViewAllProjectsClick}>
                        <div className='flex justify-center items-center gap-1'>
                            <RightArrowIcon className='h-6 w-6 text-primaryText' />
                            <p className='text-2xl font-bold text-primaryText'>View all projects</p>
                        </div>
                    </ActionButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection