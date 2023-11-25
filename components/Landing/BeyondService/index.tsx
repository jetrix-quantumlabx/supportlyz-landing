'use client'

import React from 'react'
import Image from 'next/image'
import { AnimateShape } from '@/components/Landing/ShapeAnimate'
import { Description } from './Description'

export const BeyondService = () => {
  return (
    <div className="w-full h-[845px] bg-elf-green-700 relative mb-52">
      <AnimateShape />
      <span className="absolute w-[1050px] h-100% -left-[450px] -top-[200px] z-10">
        <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
      </span>
      <span className="absolute top-0 -left-[260px] w-[1080px] animate-bounce-slow z-10">
        <Image
          src="/static/images/beyond-service.svg"
          alt="beyond-service"
          width={1200}
          height={657}
          className="w-full"
        />
      </span>
      {/* <span className="absolute w-[450px] h-[660px] -right-[360px] z-10 rotate-[-4deg] -top-[310px]">
        <Image src="/static/images/shape-3.svg" alt="shape" width={640} height={657} />
      </span> */}
      <div className="relative flex items-center w-full h-full overflow-hidden">
        <span className="absolute w-[1050px] h-100% -right-[310px] top-[200px] z-10">
          <Image src="/static/images/shape-2.svg" alt="shape" width={1000} height={600} className="h-full w-full" />
        </span>
        <Description />
      </div>
    </div>
  )
}
