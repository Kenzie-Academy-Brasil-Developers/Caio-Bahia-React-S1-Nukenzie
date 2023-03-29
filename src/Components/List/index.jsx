import React from "react"
import { NukenzieCard } from "./Card"
import { v4 as uuidv4 } from "uuid"
import { H2NoCards, ListContainerStyledDiv, UlStyledCardContainer } from "./style"

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
            <H2NoCards>Você ainda não possui nenhum lançamento!</H2NoCards>
          </>
        )}
      </UlStyledCardContainer>
    </ListContainerStyledDiv>
  )
}
