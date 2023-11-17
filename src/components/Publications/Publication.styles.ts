import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  overflow-y: scroll;
`;

export const PublicationCard = styled.div`
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 0.8s ease-in-out forwards
    `};
  border: solid 2px ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
