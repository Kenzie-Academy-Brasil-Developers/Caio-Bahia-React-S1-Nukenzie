import React from "react"

export const NukenzieCard = ({ removeFromList, list }) => {
  return (
    <li>
      <div>
        <h3>{list.title}</h3>
        <span>{list.category}</span>
      </div>
      <div>
        <p>R$ {list.quant}</p>
        <button onClick={() => removeFromList(list.id)}>
          {/* <img src={trash} alt="Botao de Excluir" /> */}
          remover
        </button>
      </div>
    </li>
  )
}
