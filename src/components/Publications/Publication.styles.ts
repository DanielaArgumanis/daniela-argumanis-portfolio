import styled from '@emotion/styled';

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  z-index: 0;
`;

export const PublicationCard = styled.div`
  flex-direction: column;
`;

export const PublicationSourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(1)} 0`};
`;
