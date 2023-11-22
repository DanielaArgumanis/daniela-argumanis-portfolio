import { css } from '@emotion/react';
import styled from '@emotion/styled';

// @Styles
import { CardContainer } from '@styles/Styles';

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const PublicationCard = styled(CardContainer)`
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 0.8s ease-in-out forwards
    `};
  flex-direction: column;
`;

export const PublicationSourceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
