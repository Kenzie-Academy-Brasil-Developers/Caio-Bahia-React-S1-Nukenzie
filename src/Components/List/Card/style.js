import styled from "styled-components"

export const CardIncome = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 145px;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid #03b898;
  padding: 14px;
  padding-bottom: 19px;
  gap: 10px;
  justify-content: space-between;
  @media (min-width: 770px) {
    flex-direction: row;
    height: 87px;
    padding: 10px;
  }
`
export const CardOutcome = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 145px;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid red;
  padding: 14px;
  gap: 10px;
  justify-content: space-between;

  @media (min-width: 500px) {
    flex-direction: row;
    height: 87px;
    padding: 10px;
  }
  @media (min-width: 770px) {
    flex-direction: row;
    height: 87px;
    padding: 10px;
  }
`
export const CardTextContainerStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #343a40;
  }
`
export const CardValueNDeleteContainerStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #212529;
  }
  button {
    width: 55px;
    height: 20px;
    border-radius: 4px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #212529;
  }
`
