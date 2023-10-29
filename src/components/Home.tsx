import styled from "@emotion/styled"

// @Icons
import GithubIcon from '../common/Icons/GithubIcon';
import LinkedinIcon from '../common/Icons/LinkedinIcon';
import HomeLabel from '../common/Icons/HomeLabelText';
import { css, keyframes } from "@emotion/react";

const PortfolioHome = styled('div')`
    width: 40%;
    padding: ${props => `${props.theme.spacing(4)} 0`}; 
    display: flex;
    flex-direction: column;
`
const PortfolioTitle = styled('span')`
    color: ${props => props.theme.palette.white};
    font-size: 34px;
    font-weight: 700;
`
const PortfolioDescription = styled('p')`
    color: ${props => props.theme.palette.text};
    font-size: 18px;
    text-align: justify;
`

const getColorBorders = (accents: string[]) => keyframes`
  0% {
    stroke: ${accents[0]};
  }
  20% {
    stroke: ${accents[1]};
  }
  40% {
    stroke: ${accents[2]};
  }
  60% {
    stroke: ${accents[3]};
  }
  80% {
    stroke: ${accents[4]};
  }
`;

const ContactSection = styled('div')`
    display: flex;
    gap: ${props => props.theme.spacing(6)};
    justify-content: center;
    padding: ${props => `${props.theme.spacing(8)} 0`};

    svg {
        width: 100px;
        height: 100px;

        :hover {
            cursor: pointer;
            .left-line {
                transition: all 0.2s ease-in;
                transform: translateY(-28px);
            }
            .top-line {
                transition: all 0.2s ease-in 0.2s;
                transform: translateX(28px)
            }
            .right-line {
                transition: all 0.2s ease-in 0.4s;
                transform: translateY(28px);
            }
            .bottom-line {
                transition: all 0.2s ease-in  0.6s;
                transform: translateX(-28px)
            }

            :nth-of-type(1)  {
                line {
                    animation: ${props => css`${getColorBorders(props.theme.palette.accents)} 0.9s linear`};
                    stroke: ${props => props.theme.palette.accents[4]};
                }
            }
            :nth-of-type(2)  {
                line {
                    animation: ${props => css`${getColorBorders(props.theme.palette.accents)} 0.9s linear reverse`};
                    stroke: ${props => props.theme.palette.accents[0]};
                }
            }
        }
    }
`

const PortfolioTitleContainer = styled('div')`
    .label1 {
        fill: ${props => props.theme.palette.accents[0]};
    }
`

const Home = () => {
    return <PortfolioHome>
        <PortfolioTitleContainer>
            <HomeLabel />
        </PortfolioTitleContainer>
        <PortfolioDescription>
            I’m a Senior React Developer based in Peru. I craft user-friendly responsive websites and awesome component libraries.
        </PortfolioDescription>
        <ContactSection>
            <GithubIcon />
            <LinkedinIcon />
        </ContactSection>
    </PortfolioHome>
}

export default Home;
