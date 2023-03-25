import React from "react"

export const FilterButtons = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("")}>Todos</button>
      <button onClick={() => setFilter("entrada")}>Entradas</button>
      <button onClick={() => setFilter("despesa")}>Despesas</button>
    </div>
  )
}
