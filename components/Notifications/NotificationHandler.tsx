"use client"

import React, { useState } from "react"
import { BellIcon } from "@/components/UI/Icons"
import { ButtonIcon } from "@/components/UI/Buttons/ButtonIcon"

interface NotificationHandlerProps {
  onClick: () => void;
  lenght: number;
}

export const NotificationHandler = ({
  onClick,
  lenght,
}: NotificationHandlerProps) => {
  return (
    <div className="relative">
      <ButtonIcon onClick={onClick}>
        <BellIcon />
      </ButtonIcon>
      <span className="rounded-full w-5 h-5 bg-emerald-700 text-white text-xs flex items-center justify-center absolute -top-1 -right-1">
        {lenght}
      </span>
    </div>
  )
}
