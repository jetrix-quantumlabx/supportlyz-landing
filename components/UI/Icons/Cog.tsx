import * as React from "react"

interface CogProps {
  width?: number;
  height?: number;
}
export const Cog = ({ width, height, ...props }: CogProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "1em"}
    height={height || "1em"}
    viewBox={`0 0 ${width || 16} ${height || 16}`}
    {...props}
  >
    <path
      fill="CurrentColor"
      d="M13.267 8.44a.667.667 0 0 1 0-.88l.854-.96a.667.667 0 0 0 .08-.78l-1.334-2.307a.666.666 0 0 0-.713-.32l-1.253.254a.667.667 0 0 1-.767-.44l-.407-1.22a.667.667 0 0 0-.633-.454H6.427a.667.667 0 0 0-.666.454l-.374 1.22a.667.667 0 0 1-.766.44l-1.287-.254a.667.667 0 0 0-.667.32L1.334 5.82a.667.667 0 0 0 .067.78l.846.96a.667.667 0 0 1 0 .88l-.846.96a.667.667 0 0 0-.067.78l1.333 2.307a.666.666 0 0 0 .714.32l1.253-.254a.667.667 0 0 1 .767.44l.406 1.22a.667.667 0 0 0 .667.454H9.14a.667.667 0 0 0 .633-.454l.407-1.22a.667.667 0 0 1 .766-.44l1.254.254a.667.667 0 0 0 .713-.32l1.333-2.307a.666.666 0 0 0-.08-.78l-.9-.96Zm-.993.893.533.6-.853 1.48-.787-.16a2 2 0 0 0-2.3 1.334l-.253.746H6.907l-.24-.76a2 2 0 0 0-2.3-1.333l-.786.16-.867-1.473.533-.6a2 2 0 0 0 0-2.667l-.533-.6.853-1.467.787.16a2 2 0 0 0 2.3-1.333l.253-.753h1.707l.253.76a2 2 0 0 0 2.3 1.333l.787-.16.853 1.48-.533.6a2 2 0 0 0 0 2.653Zm-4.513-4a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.334Zm0 4a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666Z"
    />
  </svg>
)
