import styled from "styled-components"

export const HeaderStyled = styled.header`
  width: 100%;
  height: 69px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: var(--grey-1);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;

  div {
    height: 69px;
    width: 100%;
    margin: 0px 20px;
    display: flex;
    align-items: center;
  }
  img {
    height: 24px;
    margin-left: 20px;
  }
`
