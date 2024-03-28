import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

export const PortfolioTitle = styled('span')`
  color: ${(props) => props.theme.palette.primary};
  font-size: 34px;
  font-weight: 700;
`;

export const MainLayout = styled('div')<{ showSplash: boolean }>`
  visibility: ${({ showSplash }) => (showSplash ? 'hidden' : 'visible')};
  display: flex;
  justify-content: center;
  background-image: ${({ theme }) => theme.palette.background};
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  background-size: cover;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    background-image: ${({ theme }) => theme.palette.backgroundMobile};
  }
`;

export const MainContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(2)};

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.tablet, Breakpoint.laptopS)} {
    padding: ${(props) => `0 ${props.theme.spacing(4)}`};
  }

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.mobileL, Breakpoint.tablet)} {
    padding: ${(props) => `0 ${props.theme.spacing(4)}`};
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    max-width: 600px;
  }
`;

export const PortfolioBody = styled('div')`
  display: flex;
  gap: ${(props) => props.theme.spacing(5)};
  height: ${(props) =>
    `calc(100% - ${props.theme.sizing.navbar} - ${props.theme.sizing.footer})`};

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    height: ${(props) =>
      `calc(100% - ${props.theme.sizing.navbarMobile} - ${props.theme.sizing.footerMobile})`};
  }
`;

export const PortfolioOutletContainer = styled('div')`
  display: flex;
  text-align: left;
  height: 100%;
  width: 65%;
  padding: ${(props) => `${props.theme.spacing(2)} 0`};
  transition: all 0.5s cubic-bezier(0, 0.9, 0.18, 0.96);

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    width: 100%;
  }
`;

export const PortfolioHomeContainer = styled.div<{ isHome: boolean }>`
  width: ${({ isHome }) => (isHome ? '70%' : '35%')};
  margin: ${({ isHome }) => (isHome ? 'auto' : '0 auto')};
  padding: ${(props) => `${props.theme.spacing(2)} 0`};
  text-align: ${(props) => (props.isHome ? 'center' : 'flex-start')};
  transition: all 0.5s cubic-bezier(0, 0.9, 0.18, 0.96);

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    display: ${(props) => (props.isHome ? 'flex' : 'none')};
    width: 100%;
  }
`;

const animateRect = keyframes`
0% {
  transform: scaleX(0);
}
100% {
  transform: scaleX(1);
}
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    display: flex;
  }
  to {
    opacity: 0;
    display: none;
  }
`;

export const SplashContainer = styled.div<{ showSplash: boolean }>`
  position: absolute;
  z-index: 100;
  opacity: ${(props) => (props.showSplash ? '1' : '0')};
  animation: ${(props) =>
    props.showSplash
      ? ''
      : css`
          ${fadeOutAnimation} 0.5s ease-in
        `};
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.backgroundColor};
  display: ${({ showSplash }) => (showSplash ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: all 0.5s cubic-bezier(0, 0.9, 0.18, 0.96);

  svg {
    height: 100px;
    width: 100px;
    fill: ${({ theme }) => theme.palette.primary};

    rect {
      transform: scaleX(0);
      animation: ${animateRect} 0.2s cubic-bezier(0, 0.9, 0.18, 0.96) forwards;
      :nth-of-type(1) {
        animation-delay: 0.1s;
      }
      :nth-of-type(2) {
        animation-delay: 0.2s;
      }
      :nth-of-type(3) {
        animation-delay: 0.3s;
      }
      :nth-of-type(4) {
        animation-delay: 0.4s;
      }
      :nth-of-type(5) {
        animation-delay: 0.5s;
      }
      :nth-of-type(6) {
        animation-delay: 0.6s;
      }
      :nth-of-type(7) {
        animation-delay: 0.7s;
      }
      :nth-of-type(8) {
        animation-delay: 0.8s;
      }
    }
  }
`;
