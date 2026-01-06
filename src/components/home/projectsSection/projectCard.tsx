"use client"

import ProjectCardWrapper from '@/components/animatedLines/projectCardWrapper';
import SMProjectsWrapper from '@/components/animatedLines/smProjectsWrapper';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export interface ProjectData {
    uid: number;
    name: string;
    description: string;
    intro: string;
    challenge: string;
    solution: string;
    conclusion: string;
    images: string[]
}

function ProjectCard({
    data
}: {
    data: ProjectData
}) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative flex min-w-full max-md:flex-col justify-center items-center md:items-start gap-4 md:gap-[64px] cursor-pointer p-2 md:pe-[64px]'>
            <div className='shrink-0 rounded-lg overflow-hidden'>
                <Image className='h-[268px] w-[268px] object-cover' src={`/images/${data.images[0]}`} height={268} width={268} alt='cover-image' />
            </div>
            <div className='flex flex-col gap-6 md:pt-8'>
                <p className=' text-primaryText text-[28px] font-solway font-bold leading-[33.3px]'>{data.name}</p>
                <p className='hidden md:block text-gray text-xl leading-6'>{data.description}</p>
            </div>
            <div className='hidden md:block absolute -top-[60px] -left-[30px] w-[calc(100%+200px)] h-[calc(100%+80px)] overflow-visible' >
                <ProjectCardWrapper isHovered={isHovered} className=' w-full h-full text-primaryText scale-x-105' />
            </div>
            <div className='max-md:block hidden absolute '>
                <SMProjectsWrapper className='text-primaryText scale-y-105' />
            </div>

        </div>
    )
}

export default ProjectCard