"use client"

import ArrowIcon from '@/components/icons/arrowIcon';
import Link from 'next/link';
import React, { useState } from 'react'

function LinkItemWrapper({
  children,
  href

}: {
  children: React.ReactNode;
  href: string
}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
    target='_blank'
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-10 h-10 relative flex justify-center items-center border-2 border-primaryText rounded-2xl ${isHovered ? 'animate-linkItemUp' : 'animate-linkItemDown'}`}
    >
      <ArrowIcon className={` max-w-6 max-h-6 ${isHovered ? `opacity-100 scale-[0.9]` : `opacity-0 scale-0 `} !transition-all duration-[400ms]  absolute text-primaryText`} />
      <div className={`${!isHovered ? `opacity-100 scale-100` : `opacity-0  scale-0`} !transition-all duration-[400ms]  absolute`}>
        {children}
      </div>

    </Link>
  )
}

export default LinkItemWrapper