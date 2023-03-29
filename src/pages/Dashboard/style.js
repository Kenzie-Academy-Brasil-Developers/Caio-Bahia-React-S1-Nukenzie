import styled from "styled-components"

export const MainStyled = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const MainDivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1024px;
  @media (min-width: 770px) {
    flex-direction: row;
    padding: 0px 20px;
    padding-bottom: 20px;
    height: 80vh;
  }
`
export const SectionStyledForm = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SectionStyledList = styled.section`
  width: 100%;
  /* min-width:688px */
  margin: 20px;
  margin-left: 40px;
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
