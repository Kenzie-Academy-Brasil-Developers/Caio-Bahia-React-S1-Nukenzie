import React from "react"
import { FilterButtonsContainer } from "./style"

export const FilterButtons = ({ setFilter }) => {
  return (
    <FilterButtonsContainer>
      <button onClick={() => setFilter("")}>Todos</button>
      <button onClick={() => setFilter("entrada")}>Entradas</button>
      <button onClick={() => setFilter("despesa")}>Despesas</button>
    </FilterButtonsContainer>
  )
}
