import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  animation: ${(props) =>
    css`
      ${props.theme.animations.enterCards} 0.8s ease-in-out forwards
    `};
  border: solid 2px ${({ theme }) => theme.palette.white};
  background-color: ${(props) => props.theme.palette.background};
  display: flex;
`;

export const PortfolioLink = styled(Link)`
  text-decoration: none;
`;
