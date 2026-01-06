"use client"

import Link from 'next/link';
import React, { useState } from 'react'

function NavItemWrapper({
    children,
    link,
    toolTip
}: {
    children: React.ReactNode;
    link: string;
    toolTip: string;
}) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='relative min-h-[100px] flex items-center justify-center text-linkLight hover:text-linkDark cursor-pointer'>
            <div
                style={{
                    boxShadow: isHovered
                        ? `rgba(114, 98, 218, 0.19) 0px 0.711334px 2.41854px -0.8px, rgba(114, 98, 218, 0.18) 0px 1.93715px 6.58632px -1.6px, rgba(114, 98, 218, 0.165) 0px 4.25329px 14.4612px -2.4px, rgba(114, 98, 218, 0.137) 0px 9.44132px 32.1005px -3.2px, rgba(114, 98, 218, 0.047) 0px 24px 81.6px -4px`
                        : `rgba(114,98,218,0.184) 0px 0.636953px 2.16564px -1px, rgba(114,98,218,0.176) 0px 1.9316px 6.56746px -2px, rgba(114,98,218,0.145) 0px 5.10612px 17.3608px -3px, rgba(114,98,218,0.047) 0px 16px 54.4px -4px`,
                }}
                className={` rounded-3xl border-borderLight border-2 transition-all transform-0 p-4 ${isHovered ? 'animate-jitterUp' : 'animate-jitterDown'}`}>
                {children}
            </div>
            {isHovered &&
                <div
                    style={{
                        boxShadow: `rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px, rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px, rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px, rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px`,
                    }}
                    className='absolute -top-11 right-1/2 translate-x-1/2 bg-white rounded-3xl py-1 px-4'>
                    <div className='text-center text-grayText text-base font-semibold leading-[22.4px] font-poppins'>
                        {toolTip}
                    </div>
                </div>
            }
        </Link >
    )
}

export default NavItemWrapper