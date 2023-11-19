import styled from "@emotion/styled";
import { css } from '@emotion/react';

// @Theme
import { Breakpoint } from '../../common/Theme/Theme.types';

export const AboutMeContainer = styled('div')`
  height: fit-content;
  display: grid;
  gap: ${(props) => props.theme.spacing(2)};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px 200px 250px auto;
  grid-template-areas:
    'image1 text1'
    'image1 image2'
    'text2 image2'
    'image3 text3'
    'text4 text4';

  > div {
    opacity: 0;
    animation: ${(props) =>
      css`
        ${props.theme.animations.enterCards} 0.8s ease-in-out forwards
      `};
    :hover {
      animation: ${(props) =>
        css`
          ${props.theme.animations.hoverCard} 0.3s ease-in-out forwards, ${props
            .theme.animations.enterCards} 0s;
        `};
      opacity: 1;
    }
    transition: transform 1s ease;
    :nth-of-type(1) {
      grid-area: image1;
    }
    :nth-of-type(2) {
      grid-area: text1;
    }
    :nth-of-type(3) {
      grid-area: image2;
      animation-delay: 0.1s;
    }
    :nth-of-type(4) {
      grid-area: text2;
      animation-delay: 0.2s;
    }
    :nth-of-type(5) {
      grid-area: image3;
      animation-delay: 0.3s;
    }
    :nth-of-type(6) {
      grid-area: text3;
      animation-delay: 0.3s;
    }
    :nth-of-type(7) {
      grid-area: text4;
      animation-delay: 0.4s;
    }

    /* :hover {
      animation: ${(props) =>
      css`
        ${props.theme.animations.hoverCard} 0.3s ease-in-out forwards
      `};
    } */
  }

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.tablet, Breakpoint.laptopS)} {
    grid-template-rows: 200px 200px 200px 250px auto;
  }

  ${(props) =>
    props.theme.breakpoints.between(Breakpoint.tabletS, Breakpoint.tablet)} {
    grid-template-areas:
      'image1 text1'
      'image1 image2'
      'text2 image2'
      'image3 text3'
      'text4 text4';
    grid-template-rows: auto auto auto 220px auto;
  }

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
    grid-template-areas:
      'text1 text2'
      'image1 image2'
      'image3 text3'
      'text4 text4';
    grid-template-rows: auto auto auto auto;
    gap: ${(props) => props.theme.spacing(1)};
  }
`;

export const AboutMeImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow-y: hidden;
  border: solid 2px ${(props) => props.theme.palette.white};
`;

export const AboutMeCardContainer = styled('div')`
  background-color: ${(props) => props.theme.palette.background};
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

  ${(props) => props.theme.breakpoints.down(Breakpoint.tabletS)} {
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
