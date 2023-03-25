import React from "react"
import { NukenzieCard } from "./Card"
import { v4 as uuidv4 } from "uuid"

export const Nulist = ({ filteredList, removeFromList }) => {
  return (
    <ul>
      {/* {filteredList.length > 0 ? ( */}
      <>
        {filteredList.map((list) => (
          <NukenzieCard key={uuidv4()} list={list} removeFromList={removeFromList} />
        ))}
      </>
    </ul>
  )
}
