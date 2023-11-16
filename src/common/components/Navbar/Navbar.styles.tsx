import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// @Types
import { Breakpoint } from "../../Theme/Theme.types";
import { NavLink } from "react-router-dom";

export const PortfolioNavbar = styled('nav')`
  background-color: ${(props) => props.theme.palette.background};
  height: ${(props) => props.theme.sizing.navbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const animateMoon = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const rotateSun = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const NavbarSection = styled('div')`
  display: flex;
  align-items: center;
  display: flex;
  gap: ${(props) => props.theme.spacing(4)};

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    gap: ${(props) => props.theme.spacing(1)};
  }

  svg {
    height: 30px;
    width: 30px;
    cursor: pointer;
    :hover {
      &.sun-icon {
        animation: ${rotateSun} 1s linear infinite;
      }
      .moon-star1 {
        animation: ${animateMoon} 1s linear infinite;
      }
      .moon-star2 {
        animation: ${animateMoon} 1s linear infinite reverse;
      }
    }

    ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
      height: 24px;
      width: 24px;
    }
  }
`;

export const NavbarButton = styled(NavLink)<{ order: number }>`
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.palette.white};
  top: 0;
  text-decoration: none;

  :hover {
    transition: all 0.3s ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px; /* Initial border thickness */
    bottom: -0.5rem;
    left: 50%; /* Start from the center */
    transform: translateX(-50%); /* Center horizontally */
    transition: all 0.3s ease-in-out; /* Transition for border width */
    background-color: ${(props) => props.theme.palette.white};
  }

  &:hover::before,
  &.active::before {
    width: 95%;
    background-color: ${(props) => props.theme.palette.accents};
  }
`;

