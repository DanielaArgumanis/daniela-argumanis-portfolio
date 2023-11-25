import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// @Types
import { Breakpoint } from '@theme/Theme.types';

export const CardContainer = styled.div<{
  isInteractive?: boolean;
  noPadding?: boolean;
}>`
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 1s ease-in-out forwards
    `};
  border: solid 2px ${({ theme }) => theme.palette.primary};
  background-color: ${(props) => props.theme.palette.background};
  display: flex;
  padding: ${({ noPadding, theme }) => !noPadding && theme.spacing(2)};
  cursor: ${({ isInteractive }) => isInteractive && 'pointer'};
  margin: ${({ isInteractive, theme }) =>
    isInteractive && `${theme.spacing(1)}`};

  :hover {
    box-shadow: ${({ isInteractive, theme }) =>
      isInteractive && `6px 6px 0 2px ${theme.palette.accent}`};
    a:first-of-type:not(:has(+ :hover)) {
      span {
        color: ${({ theme }) => theme.palette.accent};
      }
      path {
        stroke: ${({ theme }) => theme.palette.accent};
      }
    }
  }

  transition: all 0.2s ease-in-out;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    padding: ${({ noPadding, theme }) => !noPadding && theme.spacing(1)};
  }
`;

export const PortfolioLink = styled(Link)`
  text-decoration: none;
`;
