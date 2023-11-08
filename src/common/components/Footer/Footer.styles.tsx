import styled from '@emotion/styled';

export const PortfolioFooter = styled('footer')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: ${({ theme }) => `solid 2px ${theme.palette.text}`};
  height: ${(props) => props.theme.sizing.footer};
  position: sticky;
  background-color: ${({ theme }) => theme.palette.background};
  bottom: 0;
  box-sizing: border-box;
`;
