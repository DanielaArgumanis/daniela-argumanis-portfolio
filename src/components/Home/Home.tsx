import styled from "@emotion/styled"

// @Icons
import GithubIcon from '../../common/Icons/GithubIcon';
import LinkedinIcon from '../../common/Icons/LinkedinIcon';
import HomeLabel from '../../common/Icons/HomeLabelText';

// @Styles
import { PortfolioHome, PortfolioTitleContainer, PortfolioDescription, ContactSection } from "./Home.styles";

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
