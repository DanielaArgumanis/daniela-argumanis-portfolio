import styled from '@emotion/styled';

// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Links
import { LinkIcon } from '@icons';

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
`;

export const ProjectCard = styled(CardContainer)<{ reverse?: boolean }>`
  opacity: 0;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;

  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`;

export const ProjectCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 40%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    width: 100%;
  }
`;

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  max-width: 100%;
  margin: ${({ theme }) => theme.spacing(1)};
`;

export const Pill = styled.div`
  display: inline-flex;
  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.palette.primary};

  > span {
    margin: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  }
`;

export const ProjectLinkIcon = styled(LinkIcon)`
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  
  path {
    stroke: ${({ theme }) => theme.palette.primary};
  }
`;

export const UrlContainer = styled.div`
  display: inline-flex;
  align-items: center;

  &:hover {
    span {
      color: ${({ theme }) => theme.palette.accent};
    }
    svg {
      path {
        stroke: ${({ theme }) => theme.palette.accent};
      }
    }
  }
`;
