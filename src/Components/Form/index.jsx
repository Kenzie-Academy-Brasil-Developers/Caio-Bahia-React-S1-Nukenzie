import React, { useState } from "react"
import {
  DescriptionFieldset,
  DivButtonSubmit,
  DivStyledFormContainer,
  FormStyled,
  SelectFieldset,
  ValueFieldset
} from "./style"

export const NuForm = ({ addToList }) => {
  const [formData, setFormData] = useState({
    title: "",
    quant: "",
    category: "entrada"
  })

  const listSubmit = (event) => {
    event.preventDefault()
    if (formData.title !== "" && formData.quant !== "") {
      addToList(formData)
    } else {
      alert("Por Favor preencha todos os campos!")
    }
    setFormData({
      title: "",
      quant: "",
      category: "entrada"
    })
  }
  return (
    <FormStyled onSubmit={listSubmit} noValidate>
      <DescriptionFieldset>
        <label htmlFor="FormInputDescription">Descrição</label>
        <input
          type="text"
          placeholder="Digite sua descrição..."
          id="FormInputDescription"
          value={formData.title}
          onChange={(event) => setFormData({ ...formData, title: event.target.value })}
        />
        <small>Ex: Compra de roupas</small>
      </DescriptionFieldset>
      <DivStyledFormContainer>
        <ValueFieldset>
          <label htmlFor="FormValue">Valor(R$)</label>
          <input
            type="number"
            placeholder="1"
            value={formData.quant}
            id="FormValue"
            onChange={(event) => setFormData({ ...formData, quant: event.target.value })}
          />
          {/* {formData.quant} */}
        </ValueFieldset>
        <SelectFieldset>
          <small>Tipo do Valor</small>
          <select
            value={formData.category}
            onChange={(event) => setFormData({ ...formData, category: event.target.value })}
          >
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </SelectFieldset>
      </DivStyledFormContainer>
      <DivButtonSubmit>
        <button type="submit">Inserir valor</button>
      </DivButtonSubmit>
    </FormStyled>
  )
}
