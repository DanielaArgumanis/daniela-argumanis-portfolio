// @Components
import Typography from '../../common/components/Typography/Typography';

// @Icons
import GithubIcon from '../../common/Icons/GithubIcon';
import LinkedinIcon from '../../common/Icons/LinkedinIcon';

// @Styles
import {
  ContactSection,
  PortfolioHome,
  PortfolioTitleContainer,
} from './Home.styles';

const Home = () => {
  return (
    <PortfolioHome>
      <PortfolioTitleContainer>
        <Typography variant="title1" as="h1" margin="0">
          Welcome!
        </Typography>
        <Typography variant="title1" as="h1" margin="0">
          I'm Daniela Argumanis
        </Typography>
        <Typography variant="title1" as="h1" accent margin="0">
          Senior Front-End Engineer
        </Typography>
        <Typography variant="body1" as="p" margin="2 0">
          I’m a Senior React Developer based in Peru. I craft user-friendly
          responsive websites and awesome component libraries.
        </Typography>
      </PortfolioTitleContainer>
      <ContactSection>
        <GithubIcon />
        <LinkedinIcon />
      </ContactSection>
    </PortfolioHome>
  );
};

export default Home;
