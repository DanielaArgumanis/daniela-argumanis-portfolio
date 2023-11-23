// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Icons
import { GithubIcon, LinkedinIcon, MailIcon } from '@icons';

// @Styles
import {
  ContactSection,
  PortfolioHome,
  PortfolioTitleContainer,
} from './Home.styles';

const Home = ({ isHome }: { isHome: boolean }) => {
  return (
    <PortfolioHome>
      <PortfolioTitleContainer>
        <Typography variant="title1" as="span" margin="0">
          Welcome
        </Typography>
        <Typography variant="title1" as="span" margin="0">
          I'm Daniela Argumanis
        </Typography>
        <Typography variant="title1" as="span" accent margin="0">
          Senior Front-End Engineer
        </Typography>
        <Typography variant="body1" as="p" margin="2 0">
          I’m a Senior React Developer based in Peru. I craft user-friendly
          responsive websites and awesome component libraries.
        </Typography>
      </PortfolioTitleContainer>
      <ContactSection isHome={isHome}>
        <GithubIcon />
        <LinkedinIcon />
        <MailIcon />
      </ContactSection>
    </PortfolioHome>
  );
};

export default Home;
