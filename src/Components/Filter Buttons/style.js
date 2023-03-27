import styled from "styled-components"

export const FilterButtonsContainer = styled.div`
  gap: 16px;
  width: 100%;
  max-width: 355px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 10px;
    width: 69px;
    height: 40px;
    background: #fd377e;
    border: 1.4px solid #fd377e;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
  }
  @media (min-width: 770px) {
  }
`
