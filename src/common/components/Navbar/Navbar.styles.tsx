import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Typography from "../Typography/Typography";

export const PortfolioNavbar = styled('div')`
    background-color: ${props => props.theme.palette.background};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarSection = styled('div')`
  display: flex;
  align-items: center;
  display: flex;
  gap: ${props => props.theme.spacing(4)};
`

export const NavbarButton = styled(Typography) <{ order: number }>`
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.palette.white};
  top: 0;

  :hover {
    transition: all 0.3s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 4px; /* Initial border thickness */
    bottom: -0.5rem;
    left: 50%; /* Start from the center */
    transform: translateX(-50%); /* Center horizontally */
    transition: all 0.3s ease-in-out; /* Transition for border width */
    background-color: ${props => props.theme.palette.white};
  }

  &:hover::before {
    width: 95%;
    background-color: ${props => props.theme.palette.accents[props.order % 5]};
  }
`

const rotateSun = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ThemeButton = styled('img')`
  height: 30px;
  width: 30px;
  transform: rotate(360deg);

  :hover {
    cursor: pointer;
    animation: ${rotateSun} 1s linear infinite;
  }
`
