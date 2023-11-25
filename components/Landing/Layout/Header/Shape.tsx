'use client'

import React from 'react'
import Image from 'next/image'

export const Shape = () => {
  return (
    <div className="absolute h-[730px] overflow-hidden w-full">
      <span className="absolute top-0 w-[1600px] h-100% animate-spin-slow -left-[500px] z-10">
        <Image src="/static/images/shape-animation.svg" alt="animation" width={900} height={900} />
      </span>
    </div>
  )
}
