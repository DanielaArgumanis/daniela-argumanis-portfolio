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
        <div>
          <Typography variant="title1" as="h1">
            Welcome!
          </Typography>
          <Typography variant="title1" as="h1">
            I'm Daniela Argumanis
          </Typography>
          <Typography variant="title1" as="h1" accent>
            Senior Front-End Engineer
          </Typography>
        </div>
        <Typography variant="body1" as="p">
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
