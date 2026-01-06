"use client"

import React from 'react'
import UnderLineIcon from './icons/underLineIcon';
import TopCornerAnimatedLines from './animatedLines/topCornerAnimatedLines';

function ActionButton({
    children,
    onClick
}: {
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className='h-12 relative cursor-pointer group/actionButton'>
            <div className='relative transition-all duration-[400ms] group-hover/actionButton:translate-y-[-3px] translate-y-[4px] pe-2'>
                {children}
                <div className='absolute -top-4 -right-4 rotate-[135deg]'>
                    <TopCornerAnimatedLines className='w-[25px] h-[34px] text-primaryText' />
                </div>
            </div>
            <div className=' h-5 w-[190px] absolute bottom-0 right-0 '>
                <div className='relative h-full w-0 overflow-hidden transition-all duration-[400ms] group-hover/actionButton:w-[190px]'>
                    <UnderLineIcon className='mr-auto w-[240px] absolute top-0 left-1  text-primaryText' />
                </div>
            </div>
        </div>
    )
}



export default ActionButton