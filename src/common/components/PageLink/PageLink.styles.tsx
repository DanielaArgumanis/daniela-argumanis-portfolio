import styled from '@emotion/styled';

// @Icons
import { LinkIcon } from '@icons';

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
