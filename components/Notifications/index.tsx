"use client"

import React, { useState } from "react"
import { NotificationHandler } from "./NotificationHandler"
import { NotificationCenter } from "./NotificationCenter"
import { notifications } from "@/data"

interface NotificationsProps {}

export const Notifications = ({}: NotificationsProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleNotifications = () => setOpen(!open)

  return (
    <div className="relative">
      <NotificationHandler
        onClick={handleNotifications}
        lenght={2}
      />
      <NotificationCenter open={open} notifications={notifications}/>
    </div>
  )
}
