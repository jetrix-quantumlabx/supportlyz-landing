'use client'

import React from 'react'
import Image from 'next/image'

export const Header = () => {

  return (
    <div className="flex items-center p-6 bg-elf-green-800 bg-opacity-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-14">
          <div className="relative h-10 w-52">
            <Image src="/static/images/logo-landing.svg" alt="logo" fill priority />
          </div>
          <ul className="flex items-center gap-14">
            <li className="text-white text-lg">Product</li>
            <li className="text-white text-lg">Price</li>
            <li className="text-white text-lg">Resources</li>
            <li className="text-white text-lg">Partners</li>
          </ul>
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-14">
            <li className="text-white text-lg">Log in</li>
            <li className="text-white text-lg">Get Started</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
