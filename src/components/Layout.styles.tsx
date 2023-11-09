import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Breakpoint } from '../common/Theme/Theme.types';
import { math } from 'polished';

export const PortfolioTitle = styled('span')`
  color: ${(props) => props.theme.palette.white};
  font-size: 34px;
  font-weight: 700;
`;

export const PortfolioLayout = styled('div')`
  display: flex;
  justify-content: center;
`;

export const PortfolioContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.spacing(4)};
  min-height: 100vh;

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    padding: 0 ${(props) => props.theme.spacing(2)};
  }
`;

export const PortfolioBody = styled('div')`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${(props) => props.theme.spacing(4)};
  height: calc(100vh - 60px - 64px);
  padding: ${(props) => `${props.theme.spacing(2)} 0`};
`;

export const HomeNavBody = styled('div')`
  display: flex;
  text-align: left;
  overflow-y: scroll;
  padding: ${(props) => `${props.theme.spacing(2)} 0`};
`;
