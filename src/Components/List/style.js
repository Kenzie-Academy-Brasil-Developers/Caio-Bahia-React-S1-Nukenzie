import styled from "styled-components"

export const ListContainerStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0px 36px; */
  gap: 17px;
  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    color: #212529;
  }
  @media (min-width: 770px) {
    width: 90%;
    margin: 0px;
  }
`
export const UlStyledCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 770px) {
    display: flex;
    width: 100%;
  }
`
export const H2NoCards = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 34px;
  color: #343a40;
`
