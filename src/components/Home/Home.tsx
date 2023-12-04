// @Components
import Typography from '@commonComponents/Typography/Typography';
import Card from '@commonComponents/Card/Card';

// @Hooks
import { useCopyToClipboard } from '@hooks/useCopyToClipboard';

// @Icons
import { GithubIcon, LinkedinIcon, MailIcon } from '@icons';

// @Styles
import {
  ContactSection,
  PortfolioHome,
  PortfolioTitleContainer,
} from './Home.styles';
import { PortfolioLink } from '@styles/Styles';

// @Utils

const Home = ({ isHome }: { isHome: boolean }) => {
  const copyToClipboard = useCopyToClipboard();

  return (
    <PortfolioHome>
      <PortfolioTitleContainer>
        <Typography variant="title1" as="span" margin="0">
          Welcome!
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
        <PortfolioLink to="https://github.com/DanielaArgumanis" target="_blank">
          <Card noPadding isInteractive noAnimation>
            <GithubIcon />
          </Card>
        </PortfolioLink>
        <PortfolioLink
          to="https://www.linkedin.com/in/daniela-argumanis/"
          target="_blank"
        >
          <Card noPadding isInteractive noAnimation>
            <LinkedinIcon />
          </Card>
        </PortfolioLink>
        <Card
          noPadding
          isInteractive
          noAnimation
          onClick={() => copyToClipboard('daniela.argumanis@gmail.com')}
        >
          <MailIcon />
        </Card>
      </ContactSection>
    </PortfolioHome>
  );
};

export default Home;
