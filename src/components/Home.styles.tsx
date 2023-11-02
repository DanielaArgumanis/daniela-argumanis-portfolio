import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Breakpoint } from "../common/Theme/Theme.types";

export const PortfolioHome = styled('div')`
    padding: ${props => `${props.theme.spacing(4)} 0`}; 
    display: flex;
    flex-direction: column;
`

export const PortfolioTitle = styled('span')`
    color: ${props => props.theme.palette.white};
    font-size: 34px;
    font-weight: 700;
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

export const ContactSection = styled('div')`
    display: flex;
    gap: ${props => props.theme.spacing(6)};
    justify-content: center;
    padding: ${props => `${props.theme.spacing(8)} 0`};

    svg {
        width: 60px;
        height: 60px;

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

export const PortfolioTitleContainer = styled('div')`
  text-align: center;
`

export const PortfolioLayout = styled('div')`
  display: flex;
  justify-content: center;
  height: 100vh;
`

export const PortfolioContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 ${props => props.theme.spacing(4)};
  
  ${props => props.theme.breakpoints.down(Breakpoint.mobileL)} {
    padding: 0 ${props => props.theme.spacing(2)};
  }
`

export const HomeContent = styled('div')`
  display: flex;
  flex-grow: 1;
`

export const HomeNavBody = styled('div')`
  display: flex;
  min-width: 60%;
`

export const PortfolioBody = styled('div')`
  display: flex;
  flex-grow: 1;
  gap: ${props => props.theme.spacing(4)};
`
