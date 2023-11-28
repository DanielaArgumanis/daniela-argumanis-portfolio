import styled from '@emotion/styled';

export const PublicationCard = styled.div`
  flex-direction: column;
`;

export const PublicationSourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(1)} 0`};
`;
