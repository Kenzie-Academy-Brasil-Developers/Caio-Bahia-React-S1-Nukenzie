import styled from "styled-components"

export const MainStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 770px) {
    flex-direction: row;
    padding: 0px 20px;
    padding-bottom: 20px;
    height: 90vh;
  }
`
export const SectionStyledForm = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SectionStyledList = styled.section`
  width: 100%;
  margin: 20px;
  max-width: 355px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 770px) {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    max-width: 1024px;
  }
`
