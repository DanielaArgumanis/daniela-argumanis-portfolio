import styled from '@emotion/styled';
import Typography from '../../common/components/Typography/Typography';
import { Breakpoint } from '../../common/Theme/Theme.types';
import { css } from '@emotion/react';

export const ProjectsContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ProjectTitle = styled(Typography)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px; /* Initial border thickness */
    bottom: -0.5rem;
    background-color: ${(props) => props.theme.palette.accents};
    width: 100%;
  }
`;

export const ProjectCard = styled.div<{ reverse?: boolean }>`
  opacity: 0;
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 0.8s ease-in-out ${props.reverse
        ? '0s'
        : '0.2s'} forwards
    `};
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  border: 2px solid ${({ theme }) => theme.palette.white};
  text-align: center;
  align-items: center;

  > div {
    padding: ${({ theme }) => theme.spacing(2)};
    width: 40%;
  }

  img {
    width: 60%;
    max-height: 300px;
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    flex-direction: column;

    > div {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  max-width: 100%;
`;

export const Pill = styled.div`
  display: inline-flex;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.palette.white};

  > span {
    margin: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  }
`;
