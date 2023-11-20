"use client";

import React from "react";
import Image from "next/image";
import { BellIcon } from "@/components/UI/Icons";
import { INotification } from "@/types";

interface NotificationProps {
  notification: INotification;
}

export const Notification = ({ notification }: NotificationProps) => {
  // TODO: Add logic to handle different types of notifications
  // (e.g. messages, new followers, etc.)
  return (
    <div className="flex gap-2 items-start bg-white p-3 hover:shadow-emerald-40 rounded-xl cursor-pointer mb-3 last:mb-0 transition">
      <Image
        src="/static/images/girl.png"
        alt="user"
        width={40}
        height={40}
        className="rounded-full w-11 h-11 object-cover"
      />
      <div>
        <h5 className="text-black text-xs">
          <b>Valerie Smith</b> sent you a message in the chat <b>#98331</b>
        </h5>
        <p className="text-xs text-geyser-400">2 minutes ago</p>
      </div>
      <div className="text-emerald-500 text-sm">
        <BellIcon />
      </div>
    </div>
  );
};
