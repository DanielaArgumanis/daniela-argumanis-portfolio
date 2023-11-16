import styled from '@emotion/styled';
import { Breakpoint } from '../common/Theme/Theme.types';

export const PortfolioTitle = styled('span')`
  color: ${(props) => props.theme.palette.white};
  font-size: 34px;
  font-weight: 700;
`;

export const PortfolioLayout = styled('div')`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.background};
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const PortfolioContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(2)};
`;

export const PortfolioBody = styled('div')<{ isHome: boolean }>`
  display: flex;
  gap: ${(props) => props.theme.spacing(4)};
  height: ${(props) =>
    `calc(100% - ${props.theme.sizing.navbar} - ${props.theme.sizing.footer})`};
  padding: ${(props) => `${props.theme.spacing(2)} 0`};

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.mobileL, Breakpoint.tablet)} {
    padding: ${(props) =>
      `${props.theme.spacing(2)} ${props.theme.spacing(2)}`};
  }
`;

export const HomeNavBody = styled('div')`
  display: flex;
  text-align: left;
  overflow-y: scroll;
  height: 100%;
  width: 65%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    width: 100%;
  }
`;

export const PortfolioHomeContainer = styled.div<{ isHome: boolean }>`
  width: 35%;
  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    display: ${(props) => (props.isHome ? 'flex' : 'none')};
    height: 100%;
    width: 100%;
  }
`;
