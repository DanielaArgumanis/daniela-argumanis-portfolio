import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Breakpoint } from '../common/Theme/Theme.types';

export const PortfolioTitle = styled('span')`
  color: ${(props) => props.theme.palette.white};
  font-size: 34px;
  font-weight: 700;
`;

const getColorBorders = (accents: string[]) => keyframes`
  0% {
    stroke: ${accents[0]};
  }
  20% {
    stroke: ${accents[1]};
  }
  40% {
    stroke: ${accents[2]};
  }
  60% {
    stroke: ${accents[3]};
  }
  80% {
    stroke: ${accents[4]};
  }
`;

export const PortfolioLayout = styled('div')`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const PortfolioContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(4)};

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    padding: 0 ${(props) => props.theme.spacing(2)};
  }
`;

export const PortfolioBody = styled('div')`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${(props) => props.theme.spacing(4)};
  flex-grow: 1;
`;

export const HomeNavBody = styled('div')`
  display: flex;
  text-align: left;
  height: 600px;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    display: none;
  }
`;
