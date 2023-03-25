import React from "react"

export const TotalMoney = ({ NukenzieList }) => {
  const mapTotalMoney = NukenzieList.map((TotalMoney) => {
    return Number(TotalMoney.quant)
  })
  const reduceTotalMoney = mapTotalMoney.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  return (
    <div>
      <div>
        <h2>Valor total:</h2>
        <p>O valor se refere ao saldo</p>
      </div>
      <div>
        <p>R${reduceTotalMoney}</p>
      </div>
    </div>
  )
}
