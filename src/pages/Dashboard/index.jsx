import React, { useState } from "react"
import { NuForm } from "../../Components/Form"
import { Header } from "../../Components/Header"
import { Nulist } from "../../Components/List"
import { TotalMoney } from "../../Components/TotalMoney"
import { v4 as uuidv4 } from "uuid"
import { FilterButtons } from "../../Components/Filter Buttons"
import { MainStyled, SectionStyledForm, SectionStyledList } from "./style"

export const Dashboard = () => {
  const [NukenzieList, setNukenzieList] = useState([])
  const [filter, setFilter] = useState("")

  const filteredList = NukenzieList.filter((list) => {
    return filter === "" ? true : list.category === filter
  })
  const addToList = (list) => {
    if (list.category === "despesa") {
      list.quant = -list.quant
    }
    const newNuList = { ...list, id: uuidv4() }
    setNukenzieList([...NukenzieList, newNuList])
  }
  const removeFromList = (ListId) => {
    const newExcludeList = NukenzieList.filter((list) => list.id !== ListId)
    if (confirm("Você deseja excluir esta entrada?")) setNukenzieList(newExcludeList)
  }

  // console.log(NukenzieList)
  return (
    <>
      {/* Header */}
      <Header />
      <MainStyled>
        {/* Form + Total Money */}
        <SectionStyledForm>
          <NuForm addToList={addToList} />
          <TotalMoney NukenzieList={NukenzieList} />
        </SectionStyledForm>
        {/* Render List + Filter Buttons */}
        <SectionStyledList>
          <FilterButtons setFilter={setFilter} />
          <Nulist filteredList={filteredList} removeFromList={removeFromList} />
        </SectionStyledList>
      </MainStyled>
    </>
  )
}
