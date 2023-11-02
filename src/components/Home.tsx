// @Icons
import GithubIcon from '../common/Icons/GithubIcon';
import LinkedinIcon from '../common/Icons/LinkedinIcon';

// @Styles
import { PortfolioHome, PortfolioTitleContainer, ContactSection, HomeContent, PortfolioContainer, PortfolioLayout, PortfolioBody, HomeNavBody } from "./Home.styles";
import Typography from '../common/components/Typography/Typography';
import Footer from '../common/components/Footer/Footer';
import Navbar from '../common/components/Navbar/Navbar';
import { Outlet, matchPath, useLocation } from 'react-router';

const Home = () => {

    const location = useLocation();

    return <PortfolioLayout>
        <PortfolioContainer>
            <Navbar />
            <PortfolioBody>
                <HomeContent>
                    <PortfolioHome>
                        {/* <HomeLabel /> */}
                        <PortfolioTitleContainer>
                            <Typography variant='title' as="h1">Hi! I'm Daniela Argumanis,</Typography>
                            <Typography variant='title' as="h1">Senior Front-End Developer</Typography>
                            <Typography variant='body1' as="p">
                                I’m a Senior React Developer based in Peru. I craft user-friendly responsive websites and awesome component libraries.
                            </Typography>
                        </PortfolioTitleContainer>
                        <ContactSection>
                            <GithubIcon />
                            <LinkedinIcon />
                        </ContactSection>
                    </PortfolioHome>
                </HomeContent>
                {location.pathname !== "/" && <HomeNavBody>
                    <Outlet />
                </HomeNavBody>}
            </PortfolioBody>
            <Footer />
        </PortfolioContainer>
    </PortfolioLayout>
}

export default Home;
