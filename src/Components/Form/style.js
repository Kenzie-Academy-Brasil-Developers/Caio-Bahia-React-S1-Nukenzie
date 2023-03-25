import styled from "styled-components"

export const FormStyled = styled.form`
  background-color: gray;
  display: flex;
  flex-direction: column;
  height: 434px;
  width: 355px;
  /* padding: 20px; */
`

export const DescriptionFieldset = styled.fieldset`
  margin: 0px 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  label {
    margin-bottom: 9px;
  }
  input {
    background: #f8f9fa;
    width: 100%;
    height: 52px;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
    margin-bottom: 4px;
  }
`
export const DivStyledFormContainer = styled.div`
  margin: 0px 20px;
  height: 40%;
`
export const ValueFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 9px;
  }
  input {
    background: #f8f9fa;
    width: 100%;
    height: 48px;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
    margin-bottom: 4px;
  }
`
