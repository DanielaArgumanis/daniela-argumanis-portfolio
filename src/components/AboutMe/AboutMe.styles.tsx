import styled from '@emotion/styled';

// @Theme
import { Breakpoint } from '@theme/Theme.types';

export const AboutMeContainer = styled('div')`
  display: grid;
  gap: ${(props) => props.theme.spacing(2)};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'image1 text1'
    'image1 image2'
    'text2 image2'
    'image3 text3'
    'text4 text4';

  > div {
    transition: transform 1s ease;
    :nth-of-type(1) {
      grid-area: image1;
    }
    :nth-of-type(2) {
      grid-area: text1;
    }
    :nth-of-type(3) {
      grid-area: image2;
    }
    :nth-of-type(4) {
      grid-area: text2;
    }
    :nth-of-type(5) {
      grid-area: image3;
    }
    :nth-of-type(6) {
      grid-area: text3;
    }
    :nth-of-type(7) {
      grid-area: text4;
    }
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    grid-template-areas:
      'image1 text1'
      'text2 image2'
      'image3 text3'
      'text4 text4';
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    gap: ${(props) => props.theme.spacing(1)};
  }
`;

export const AboutMeImg = styled.div<{ src: string }>`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  min-height: 350px;
  width: 100%;

  ${(props) => props.theme.breakpoints.down(Breakpoint.laptopS)} {
    min-height: 285px;
  }
  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    min-height: 220px;
  }
`;

export const AboutMeTitleContainer = styled('div')`
  svg {
    padding: 0;
    width: 24px;
    height: 24px;
  }
  display: flex;
  align-items: center;

  > span {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 4px; /* Initial border thickness */
      bottom: -0.5rem;
      background-color: ${(props) => props.theme.palette.accent};
      width: 100%;
    }
  }
`;
