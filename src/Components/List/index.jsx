import React from "react"
import { NukenzieCard } from "./Card"
import { v4 as uuidv4 } from "uuid"
import { ListContainerStyledDiv, UlStyledCardContainer } from "./style"

export const Nulist = ({ filteredList, removeFromList }) => {
  return (
    <ListContainerStyledDiv>
      <h2>Resumo Financeiro</h2>
      <UlStyledCardContainer>
        {filteredList.length > 0 ? (
          <>
            {filteredList.map((list) => (
              <NukenzieCard key={uuidv4()} list={list} removeFromList={removeFromList} />
            ))}
          </>
        ) : (
          <>
            <h2>Não há lançamentos ainda!</h2>
          </>
        )}
      </UlStyledCardContainer>
    </ListContainerStyledDiv>
  )
}
