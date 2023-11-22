import styled from '@emotion/styled';

// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Types
import { Breakpoint } from '@theme/Theme.types';
import { CardContainer } from '@styles/Styles';

export const ProjectsContainer = styled.div`
  display: flex;
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
    background-color: ${(props) => props.theme.palette.accent};
    width: 100%;
  }
`;

export const ProjectCard = styled(CardContainer)<{ reverse?: boolean }>`
  opacity: 0;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  text-align: center;
  align-items: center;

  img {
    width: 60%;
    max-height: 300px;
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const ProjectCardDescription = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  width: 40%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    width: 100%;
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
  border: solid 1px ${({ theme }) => theme.palette.primary};

  > span {
    margin: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  }
`;
