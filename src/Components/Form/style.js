import styled from "styled-components"

export const FormStyled = styled.form`
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  height: 415px;
  width: 355px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 19px;
`

export const DescriptionFieldset = styled.fieldset`
  margin: 0px 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  label {
    margin-bottom: 9px;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #212529;
  }
  input {
    background: #f8f9fa;
    width: 100%;
    height: 52px;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
    margin-bottom: 4px;
  }
  small {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #868e96;
  }
`
export const DivStyledFormContainer = styled.div`
  margin: 0px 20px;
  height: 50%;
`
export const ValueFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
export const SelectFieldset = styled.fieldset`
  height: 45%;
  small {
    margin-bottom: 8px;
  }
  select {
    background: #f8f9fa;
    width: 100%;
    height: 48px;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
    margin-bottom: 4px;
  }
`
export const DivButtonSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
  button {
    height: 48px;
    width: 314px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px 20px;
    gap: 10px;
    background: #fd377e;
    border: 2px solid #fd377e;
    border-radius: 8px;
    color: #ffffff;

    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`
