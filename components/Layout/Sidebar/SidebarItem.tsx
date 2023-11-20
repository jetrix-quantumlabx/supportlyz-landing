'use client'
import React from 'react'
import { ISidebarItem } from '@/types/sidebar'

export const SidebarItem = ({ icon, label, setActiveLabel, activeLabel  }: ISidebarItem) => {

  const handleSidebarItem = () => setActiveLabel(label)

  const activeClass = activeLabel === label ? 'is-active' : ''

  return (
    <div className={`sidebar-item group ${activeClass}`} onClick={handleSidebarItem}>
      <div className="relative z-10 text-3xl group-hover:text-white">
        {label === 'messages' && (
          <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-2 -right-2 bg-emerald-700">
            2
          </span>
        )}
        {icon}
      </div>
    </div>
  )
}
