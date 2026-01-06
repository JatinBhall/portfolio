import React from 'react'

function SectionHeading({
    heading
}: {
    heading: string;
}) {
    return (
        <div className='flex justify-center items-center gap-8'>
            <div className=' max-md:hidden w-[86px] h-[3.5px] rounded-full bg-primaryText'></div>
            <div className='text-[42px] leading-[50.4px] text-primaryText font-solway font-bold'>{heading}</div>
            <div className=' max-md:hidden w-[86px] h-[3.5px] rounded-full bg-primaryText'></div>
        </div>
    )
}

export default SectionHeading