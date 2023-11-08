import styled from "@emotion/styled";

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
  grid-template-rows: 1.5fr 1fr 1.5fr 2fr 2fr;

  > img {
    height: 330px;
    width: 100%;
    border: solid 2px ${(props) => props.theme.palette.white};
    :nth-of-type(1) {
      grid-area: image1;
    }
    :nth-of-type(2) {
      grid-area: image2;
    }
    :nth-of-type(3) {
      grid-area: image3;
    }
  }

  > div {
    :nth-of-type(1) {
      grid-area: text1;
    }
    :nth-of-type(2) {
      grid-area: text2;
    }
    :nth-of-type(3) {
      grid-area: text3;
    }
    :nth-of-type(4) {
      grid-area: text4;
    }
  }
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
