"use client"

import React from "react"
import Image from "next/image"
import {
  MagnetIcon,
  EarphonesIcon,
} from "@/components/UI/Icons"
import { ButtonIcon } from "@/components/UI/Buttons/ButtonIcon"
import { Notifications } from "@/components/Notifications"
import { Search } from "@/components/Search"
import { Account } from "@/components/Account"

const Header = () => {
  return (
    <div className="flex items-center p-6 bg-geyser-100">
      <div className="flex items-center justify-between w-full">
        <div className="relative h-10 w-52">
          <Image src="/static/images/logo.svg" alt="logo" fill priority />
        </div>
        <Search />
        <div className="relative flex items-center gap-5">
          <ButtonIcon onClick={() => console.log()}>
            <MagnetIcon />
          </ButtonIcon>
          <ButtonIcon onClick={() => console.log()}>
            <EarphonesIcon />
          </ButtonIcon>
          <Notifications />
          <Account />
        </div>
      </div>
    </div>
  )
}

export default Header
