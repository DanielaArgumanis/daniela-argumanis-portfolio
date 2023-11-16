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
`;

export const PortfolioContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(4)};
  min-height: 100vh;
`;

export const PortfolioBody = styled('div')<{ isHome: boolean }>`
  display: ${(props) => (props.isHome ? 'flex' : 'grid')};
  grid-template-columns: 2fr 3fr;
  gap: ${(props) => props.theme.spacing(4)};
  height: ${(props) =>
    `calc(100vh - ${props.theme.sizing.navbar} - ${props.theme.sizing.footer})`};
  padding: ${(props) => `${props.theme.spacing(2)} 0`};

  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    display: flex;
  }
`;

export const HomeNavBody = styled('div')`
  display: flex;
  text-align: left;
  overflow-y: scroll;
  padding: ${(props) => `${props.theme.spacing(2)} 0`};
`;

export const PortfolioHomeContainer = styled.div<{ isHome: boolean }>`
  ${(props) => props.theme.breakpoints.down(Breakpoint.tablet)} {
    display: ${(props) => (props.isHome ? 'flex' : 'none')};
  }
`;
