import React from "react"
import { LogoIcon } from './../elements/portfolio'

const Logo = ({width='100px', height='100px', stroke="#fff", isAbsolute='false', top='0', left='0'}) => (
  <LogoIcon width={width} height={height} top={top} left={left} isAbsolute={isAbsolute}
  viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <ellipse
      style={{
        stroke: stroke,
        fill: "transparent",
        strokeWidth: 6,
      }}
      cx={241.954}
      cy={212.643}
      rx={122.989}
      ry={119.54}
    />
    <path
      style={{
        stroke: stroke,
        fill: "transparent",
        strokeWidth: 6,
        strokeLinecap: "round",
      }}
      d="m363.218 206.897-120.69 2.298-2.874 218.391 137.357-.575"
    />
    <path
      style={{
        fill: "#d8d8d8",
        stroke: stroke,
        strokeWidth: 6,
        strokeLinecap: "round",
      }}
      d="M377.413 426.563 183.16 109.322"
    />
    <path
      style={{
        fill: "#d8d8d8",
        stroke: stroke,
        strokeWidth: 6,
      }}
      d="m179.713 63.322-1.598 367.816"
    />
  </LogoIcon>
)

export default Logo