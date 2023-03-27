import styled from "styled-components"

export const MainStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 770px) {
    flex-direction: row;
    padding: 0px 20px;
    padding-bottom: 20px;
    height: 90vh;
  }
`
export const SectionStyledForm = styled.section``

export const SectionStyledList = styled.section`
  width: 100%;
  margin: 20px;
  @media (min-width: 770px) {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }
`
