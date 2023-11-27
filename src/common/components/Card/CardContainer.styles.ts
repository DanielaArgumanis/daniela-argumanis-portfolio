import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Breakpoint } from '@theme/Theme.types';

const rotation = keyframes` 
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
`;

export const CardContainer = styled.div<{
  animationFinished?: boolean;
  isInteractive?: boolean;
  noPadding?: boolean;
  noAnimation?: boolean;
  direction?: 'row' | 'column';
}>`
  --gradient-angle: 0deg;
  position: relative;
  pointer-events: ${({ animationFinished, isInteractive }) =>
    (!animationFinished || !isInteractive) && 'none'};
  animation: ${({ noAnimation, animationFinished, theme }) =>
    !noAnimation &&
    !animationFinished &&
    css`
      ${theme.animations.enterCards} 1s ease-in-out
    `};
  background: ${(props) => props.theme.palette.background};
  background-size: cover;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  padding: ${({ noPadding, theme }) => !noPadding && theme.spacing(2)};
  cursor: ${({ isInteractive }) => isInteractive && 'pointer'};
  margin: ${({ isInteractive, theme }) =>
    isInteractive && `${theme.spacing(1)}`};
  border: 2px solid ${({ theme }) => theme.palette.primary};

  :hover {
    border-color: transparent;
    ::before,
    ::after {
      content: '';
      position: absolute;
      inset: -0.3rem;
      z-index: -1;
      background: conic-gradient(
        from var(--gradient-angle),
        #6ca5f0,
        #6c7bf0,
        #a34df0,
        #6c7bf0,
        #6ca5f0
      );
      animation: ${rotation} 1s linear infinite;
    }

    ::after {
      filter: blur(0.2rem);
    }
    h6:first-of-type:not(:has(+ :hover)) {
      color: ${({ theme }) => theme.palette.accent};
      path {
        stroke: ${({ theme }) => theme.palette.accent};
      }
    }
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    padding: ${({ noPadding, theme }) => !noPadding && theme.spacing(1)};
  }
`;
