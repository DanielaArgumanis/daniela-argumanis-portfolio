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

  > img {
    width: 100%;
    height: 350px;
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
    fill: ${(props) => props.theme.palette.accents[1]};
  }
`;

export const AboutMeTitleContainer = styled('div')`
  display: flex;
  align-items: center;
`;
