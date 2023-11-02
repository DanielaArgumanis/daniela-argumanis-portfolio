import { Outlet, useLocation } from 'react-router';

// @Icons
import GithubIcon from '../common/Icons/GithubIcon';
import LinkedinIcon from '../common/Icons/LinkedinIcon';

// @Styles
import { PortfolioHome, PortfolioTitleContainer, ContactSection, PortfolioContainer, PortfolioLayout, PortfolioBody, HomeNavBody } from "./Home.styles";
import Typography from '../common/components/Typography/Typography';
import Footer from '../common/components/Footer/Footer';
import Navbar from '../common/components/Navbar/Navbar';

const Home = () => {

    const location = useLocation();

    return <PortfolioLayout>
        <PortfolioContainer>
            <Navbar />
            <PortfolioBody>
                <PortfolioHome>
                    {/* <HomeLabel /> */}
                    <PortfolioTitleContainer>
                        <Typography variant='title' as="h1">Welcome! I'm Daniela Argumanis,</Typography>
                        <Typography variant='title' as="h1">Senior Front-End Engineer</Typography>
                        <Typography variant='body1' as="p">
                            I’m a Senior React Developer based in Peru. I craft user-friendly responsive websites and awesome component libraries.
                        </Typography>
                    </PortfolioTitleContainer>
                    <ContactSection>
                        <GithubIcon />
                        <LinkedinIcon />
                    </ContactSection>
                </PortfolioHome>
                {location.pathname !== "/" && <HomeNavBody>
                    <Outlet />
                </HomeNavBody>}
            </PortfolioBody>
            <Footer />
        </PortfolioContainer>
    </PortfolioLayout>
}

export default Home;
