import styled from '@emotion/styled';

export const PortfolioHome = styled('div')`
  padding: ${(props) => props.theme.spacing(4)} 0;
  gap: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  transition: all 1s ease-in;
`;

export const PortfolioTitleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${(props) => props.theme.spacing(2)};
`;

export const ContactSection = styled('div')<{ isHome: boolean }>`
  display: flex;
  gap: ${(props) => props.theme.spacing(6)};
  justify-content: ${({ isHome }) => isHome && 'center'};

  svg {
    width: 60px;
    height: 60px;

    path {
      fill: ${(props) => props.theme.palette.primary};
    }

    rect {
      stroke: ${(props) => props.theme.palette.primary};
    }

    cursor: pointer;

    :hover {
      .left-line {
        transition: all 0.2s ease-in;
        transform: translateY(-28px);
      }
      .top-line {
        transition: all 0.2s ease-in 0.2s;
        transform: translateX(28px);
      }
      .right-line {
        transition: all 0.2s ease-in 0.4s;
        transform: translateY(28px);
      }
      .bottom-line {
        transition: all 0.2s ease-in 0.6s;
        transform: translateX(-28px);
      }

      line {
        stroke: ${(props) => props.theme.palette.accent};
      }
    }
  }
`;
