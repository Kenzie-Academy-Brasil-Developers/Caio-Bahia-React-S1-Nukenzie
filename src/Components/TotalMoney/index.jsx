import React from "react"
import { TotalMoneyContainerStyled, TotalMoneyCounter, TotalMoneyTextContainer } from "./style"

export const TotalMoney = ({ NukenzieList }) => {
  const mapTotalMoney = NukenzieList.map((TotalMoney) => {
    return Number(TotalMoney.quant)
  })
  const reduceTotalMoney = mapTotalMoney.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  return (
    <TotalMoneyContainerStyled>
      <TotalMoneyTextContainer>
        <h2>Valor total:</h2>
        <p>O valor se refere ao saldo</p>
      </TotalMoneyTextContainer>
      <div>
        <TotalMoneyCounter>R${reduceTotalMoney}</TotalMoneyCounter>
      </div>
    </TotalMoneyContainerStyled>
  )
}
