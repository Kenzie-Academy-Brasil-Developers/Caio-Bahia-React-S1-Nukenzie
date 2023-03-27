import styled from "styled-components"

export const TotalMoneyContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  height: 96px;
  width: 355px;
`
export const TotalMoneyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const TotalMoneyCounter = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  color: #fd377e;
`
