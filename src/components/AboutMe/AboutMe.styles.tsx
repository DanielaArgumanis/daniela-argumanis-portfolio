import styled from "@emotion/styled";
import { Breakpoint } from '../../common/Theme/Theme.types';

export const AboutMeContainer = styled('div')`
  display: grid;
  gap: ${(props) => props.theme.spacing(2)};
  grid-template-areas:
    'image1 text1'
    'image1 image2'
    'text2 image2'
    'image3 text3'
    'text4 text4';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;

  > div {
    display: grid;
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

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    grid-template-areas:
      'image1 text1'
      'text2 image2'
      'image3 text3'
      'text4 text4';
    grid-template-rows: auto auto auto auto;
  }
`;

export const AboutMeImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid 2px ${(props) => props.theme.palette.white};
`;

export const AboutMeCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.palette.white};
  padding: ${(props) => props.theme.spacing(2)};

  svg {
    padding: 0;
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.palette.accents};
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.mobileS)} {
    padding: ${(props) => props.theme.spacing(1)};
  }
`;

export const AboutMeTitleContainer = styled('div')`
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
      background-color: ${(props) => props.theme.palette.accents};
      width: 100%;
    }
  }
`;
