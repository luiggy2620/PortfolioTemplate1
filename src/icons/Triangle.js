import React from "react"
import { Figure } from "../elements/portfolio"

const Triangle = ({fill='white', width='7%', height='7%', top='0', left='0', speed='0'}) => (

  <Figure xmlns="http://www.w3.org/2000/svg" 
  fill={fill} height={height} width={width} top={top} left={left} speed={speed}
  className="figure" viewBox="0 0 50 50" >
    <path d="M6.7 40q-.9 0-1.325-.775-.425-.775.075-1.525L22.8 10.05q.45-.7 1.25-.7t1.25.7L42.55 37.7q.45.75.05 1.525-.4.775-1.3.775Zm2.65-3h29.3l-14.6-23.25Zm14.7-11.9Z" />
  </Figure>
)

export default Triangle