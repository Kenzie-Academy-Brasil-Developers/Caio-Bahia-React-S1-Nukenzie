import styled from "styled-components"

export const FilterButtonsContainer = styled.div`
  gap: 16px;
  width: 100%;
  max-width: 355px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
    :hover {
      background-color: #e34981;
      -webkit-animation: wobble-hor-bottom 0.8s both;
      animation: wobble-hor-bottom 0.8s both;
      @-webkit-keyframes wobble-hor-bottom {
        0%,
        100% {
          -webkit-transform: translateX(0%);
          transform: translateX(0%);
          -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
        }
        15% {
          -webkit-transform: translateX(-8px) rotate(-3deg);
          transform: translateX(-8px) rotate(-3deg);
        }
        30% {
          -webkit-transform: translateX(7.5px) rotate(3deg);
          transform: translateX(7.5px) rotate(3deg);
        }
        45% {
          -webkit-transform: translateX(-7.5px) rotate(-3.6deg);
          transform: translateX(-7.5px) rotate(-3.6deg);
        }
        60% {
          -webkit-transform: translateX(4.5px) rotate(2.4deg);
          transform: translateX(4.5px) rotate(2.4deg);
        }
        75% {
          -webkit-transform: translateX(-3px) rotate(-1.2deg);
          transform: translateX(-3px) rotate(-1.2deg);
        }
      }
      @keyframes wobble-hor-bottom {
        0%,
        100% {
          -webkit-transform: translateX(0%);
          transform: translateX(0%);
          -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
        }
        15% {
          -webkit-transform: translateX(-15px) rotate(-3deg);
          transform: translateX(-15px) rotate(-3deg);
        }
        30% {
          -webkit-transform: translateX(7px) rotate(3deg);
          transform: translateX(7px) rotate(3deg);
        }
        45% {
          -webkit-transform: translateX(-7px) rotate(-3.6deg);
          transform: translateX(-7px) rotate(-3.6deg);
        }
        60% {
          -webkit-transform: translateX(4.5px) rotate(2.4deg);
          transform: translateX(4.5px) rotate(2.4deg);
        }
        75% {
          -webkit-transform: translateX(-3px) rotate(-1.2deg);
          transform: translateX(-3px) rotate(-1.2deg);
        }
      }
    }
    @media (min-width: 770px) {
      justify-content: center;
    }
  }
`
