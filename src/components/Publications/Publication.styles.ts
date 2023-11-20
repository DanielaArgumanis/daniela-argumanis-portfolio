import { css } from '@emotion/react';
import styled from '@emotion/styled';

// @Styles
import { CardContainer } from '../../common/Styles/Styles';

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  overflow-y: scroll;
`;

export const PublicationCard = styled(CardContainer)`
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 0.8s ease-in-out forwards
    `};
  flex-direction: column;

  :hover {
    cursor: pointer;
  }
`;

export const PublicationSourceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
