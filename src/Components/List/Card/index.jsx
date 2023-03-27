import React from "react"
import {
  CardIncome,
  CardOutcome,
  CardTextContainerStyledDiv,
  CardValueNDeleteContainerStyledDiv
} from "./style"

export const NukenzieCard = ({ removeFromList, list }) => {
  console.log(list)
  return (
    <>
      {list.category === "entrada" ? (
        <CardIncome>
          <CardTextContainerStyledDiv>
            <h3>{list.title}</h3>
            <span>{list.category}</span>
          </CardTextContainerStyledDiv>
          <CardValueNDeleteContainerStyledDiv>
            <p>R$ {list.quant}</p>
            <button onClick={() => removeFromList(list.id)}>
              {/* <img src={trash} alt="Botao de Excluir" /> */}
              Excluir
            </button>
          </CardValueNDeleteContainerStyledDiv>
        </CardIncome>
      ) : (
        <CardOutcome>
          <CardTextContainerStyledDiv>
            <h3>{list.title}</h3>
            <span className="category">{list.category}</span>
          </CardTextContainerStyledDiv>
          <CardValueNDeleteContainerStyledDiv>
            <p>R$ {list.quant}</p>
            <button onClick={() => removeFromList(list.id)}>
              {/* <img src={trash} alt="Botao de Excluir" /> */}
              Excluir
            </button>
          </CardValueNDeleteContainerStyledDiv>
        </CardOutcome>
      )}
    </>
  )
}
