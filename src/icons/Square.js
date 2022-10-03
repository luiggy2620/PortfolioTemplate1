import React from "react"
import { Figure } from "../elements/portfolio"

const Square = ({fill='white', width='7%', height='7%', top='0', left='0', speed='0'}) => (

  <Figure 
    xmlns="http://www.w3.org/2000/svg" 
    fill={fill} height={height} width={width} top={top} left={left} speed={speed}
    className="figure" viewBox="0 0 50 50">
    <path d="M9 42q-1.25 0-2.125-.875T6 39V9q0-1.25.875-2.125T9 6h30q1.25 0 2.125.875T42 9v30q0 1.25-.875 2.125T39 42Zm0-3h30V9H9Zm0 0V9v30Z" />
  </Figure>
)

export default Square