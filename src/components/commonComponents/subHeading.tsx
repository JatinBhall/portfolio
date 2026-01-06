import React from 'react'

function SubHeading({
    subHeading,
    className
}:{
    subHeading:string;
    className:string
}) {
  return (
    <div className={`text-[28px] font-solway leading-[33.6px] text-primaryText font-bold ${className} `}>{subHeading}</div>
  )
}

export default SubHeading