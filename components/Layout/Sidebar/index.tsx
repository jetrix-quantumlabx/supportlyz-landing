'use client'
import React, { useState } from 'react'
import {
  MessageIcon,
  HomeIcon,
  RobotIcon,
  ChatIcon,
  TrayMessageIcon,
  UsersIcon,
  MagnetIcon,
  DashboardIcon,
  CogIcon,
} from '@/components/UI/Icons'
import { SidebarItem } from './SidebarItem'

const OPTIONS = [
  {
    label: 'dashboard',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    label: 'messages',
    icon: <TrayMessageIcon />,
    link: '/',
  },
  {
    label: 'chatbots',
    icon: <MessageIcon />,
    link: '/',
  },
  {
    label: 'suly',
    icon: <RobotIcon />,
    link: '/',
  },
  {
    label: 'mail marketing',
    icon: <ChatIcon />,
    link: '/',
  },
  {
    label: 'leads',
    icon: <UsersIcon />,
    link: '/',
  },
  {
    label: 'analytics',
    icon: <MagnetIcon />,
    link: '/',
  },
  {
    label: 'integrations',
    icon: <DashboardIcon />,
    link: '/',
  },
  {
    label: 'settings',
    icon: <CogIcon />,
    link: '/',
  },
]

export const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState<string>('dashboard')

  return (
    <div className="bg-geyser-100 w-28">
      {OPTIONS.map((item, index) => (
        <SidebarItem
          key={index}
          label={item.label}
          icon={item.icon}
          link={item.link}
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
        />
      ))}
    </div>
  )
}
