// @Icons
import GithubIcon from '../../common/Icons/GithubIcon';
import LinkedinIcon from '../../common/Icons/LinkedinIcon';
import HomeLabel from '../../common/Icons/HomeLabelText';

// @Styles
import { PortfolioHome, PortfolioTitleContainer, ContactSection } from "./Home.styles";
import Typography from '../../common/components/Typography/Typography';

const Home = () => {
    return <PortfolioHome>
        <PortfolioTitleContainer>
            <HomeLabel />
        </PortfolioTitleContainer>
        <Typography variant='body1' as="p">
            I’m a Senior React Developer based in Peru. I craft user-friendly responsive websites and awesome component libraries.
        </Typography>
        <ContactSection>
            <GithubIcon />
            <LinkedinIcon />
        </ContactSection>
    </PortfolioHome>
}

export default Home;
