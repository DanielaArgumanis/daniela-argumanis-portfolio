import styled from '@emotion/styled';

// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Icons
import { LinkIcon } from '@icons';
import { Breakpoint } from '@theme/Theme.types';

export const ProjectLinkIcon = styled(LinkIcon)`
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;

  path {
    stroke: ${({ theme }) => theme.palette.primary};
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    height: 15px;
    width: 15px;
  }
`;

export const ProjectLink = styled(Typography)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};

  &:hover {
    color: ${({ theme }) => theme.palette.accent};
    path {
      stroke: ${({ theme }) => theme.palette.accent};
    }
  }
`;
