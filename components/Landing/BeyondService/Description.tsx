'use client'

import React from 'react'

export const Description = () => {
  return (
    <div className="container mx-auto flex items-center justify-end w-full h-full z-20">
      <div className="text-white w-3/6">
        <h4 className="text-4xl mb-8 font-semibold pb-4 relative after:content-[''] after:absolute after:top-full after:left-0 after:h-1 after:z-20 after:bg-emerald-900 after:w-40">
          <span className="font-normal">Beyond Service: Defining</span> <br />
          the Future of E-commerce
        </h4>
        <p className="text-base bg-elf-green-600 block rounded-2xl p-8 bg-opacity-40">
          In the era of e-commerce, success is written in two words: quality and service. Our AI chatbot not only
          supports these pillars but elevates them to new heights. Get ready to experience a revolution in how you
          interact with your customers, setting new standards in e-commerce and positioning your brand as an undisputed
          leader in customer service and interaction quality.
        </p>
      </div>
    </div>
  )
}
