import styled from '@emotion/styled';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

export const PortfolioTitle = styled('span')`
  color: ${(props) => props.theme.palette.primary};
  font-size: 34px;
  font-weight: 700;
`;

export const MainLayout = styled('div')`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background};
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
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
  overflow-y: scroll;
  transition: all 0.5s cubic-bezier(0, 0.9, 0.18, 0.96);

  > div {
    height: fit-content;
  }

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
