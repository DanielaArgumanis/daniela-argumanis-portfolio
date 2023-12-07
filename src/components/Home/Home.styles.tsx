import styled from '@emotion/styled';

// @Types
import { Breakpoint } from '@theme/Theme.types';

export const PortfolioHome = styled('div')`
  padding: ${(props) => `${props.theme.spacing(4)} ${props.theme.spacing(1)}`};
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in;
  width: 100%;
`;

export const PortfolioTitleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${(props) => props.theme.spacing(2)};
`;

export const ContactSection = styled('div')<{ isHome: boolean }>`
  display: flex;
  z-index: 0;
  justify-content: ${({ isHome }) => (isHome ? 'center' : 'space-between')};
  gap: ${({ theme, isHome }) => isHome && theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(6)};

  svg {
    width: 60px;
    height: 60px;

    path {
      fill: ${(props) => props.theme.palette.primary};
    }

    rect {
      stroke: ${(props) => props.theme.palette.primary};
    }
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    padding-top: ${({ theme, isHome }) =>
      isHome ? theme.spacing(6) : theme.spacing(2)};
    svg {
      width: ${({ isHome }) => !isHome && '50px'};
      height: ${({ isHome }) => !isHome && '50px'};
    }
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
