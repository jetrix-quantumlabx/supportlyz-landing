'use client'

import React from 'react'
import { DynamizingConversions } from './DynamizingConversions'
import { SeamlessIntegration } from './SeamlessIntegration'
import { YourBrands } from './YourBrands'
import { AI } from './AI'
import { Title } from './Title'
import { ShapeAbstract1 } from '@/components/Landing/ShapesAbstract/ShapeAbstract1'
import { ShapeAbstract2 } from '@/components/Landing/ShapesAbstract/ShapeAbstract2'

export const ProductDescription = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto py-60">
        <ShapeAbstract1 />
        <Title />
        <DynamizingConversions />
        <SeamlessIntegration />
        <YourBrands />
        <AI />
      </div>
      <ShapeAbstract2 />
    </div>
  )
}
