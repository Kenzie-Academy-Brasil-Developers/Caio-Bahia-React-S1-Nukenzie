import React from "react"
import { HeaderStyled } from "./style"
import NuKenzie from "/src/assets/Logos/NuKenzie.png"

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <img src={NuKenzie} alt="Nukenzie Logo" />
      </div>
    </HeaderStyled>
  )
}
