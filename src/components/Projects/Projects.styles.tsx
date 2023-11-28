import styled from '@emotion/styled';

// @Types
import { Breakpoint } from '@theme/Theme.types';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  z-index: 0;
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

export const ProjectCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  width: 40%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    width: 100%;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 60%;
  height: 100%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    flex-direction: column;
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
`;
