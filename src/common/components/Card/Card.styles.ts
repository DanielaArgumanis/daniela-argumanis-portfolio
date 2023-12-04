import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

// @Types
import { Breakpoint } from '@theme/Theme.types';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  z-index: 0;
`;

const borderRotation = keyframes` 
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
`;

export const StyledCard = styled.div<{
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
    isInteractive && `0 ${theme.spacing(1.5)}`};
  border: 2px solid ${({ theme }) => theme.palette.secondary};
  > * {
    z-index: 2;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) =>
      theme.colorMode === 'dark' ? '#000' : '#fff'};
    opacity: ${({ theme }) => (theme.colorMode === 'dark' ? '0.2' : '0.6')};
  }
  :hover {
    border-color: transparent;

    ::after {
      content: '';
      position: absolute;
      inset: -0.3rem;
      z-index: -1;
      --gradient-angle: 0deg;
      background: conic-gradient(
        from var(--gradient-angle),
        ${({ theme }) =>
          `${theme.palette.accents.slice(0, 4).join(', ')}, ${
            theme.palette.accents[2]
          }, ${theme.palette.accents[1]}, ${theme.palette.accents[0]}`}
      );
      animation: ${borderRotation} 2s linear infinite;
    }

    ::after {
      filter: blur(0.3rem);
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
