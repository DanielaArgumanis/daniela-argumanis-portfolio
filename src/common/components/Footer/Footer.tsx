// @Components
import Typography from '../Typography/Typography';

// @Styles
import { PortfolioFooter } from './Footer.styles';

const Footer = () => {
  return (
    <PortfolioFooter>
      <Typography variant="body2">© 2023 Daniela Argumanis</Typography>
      <Typography variant="body2">daniela.argumanis@gmail.com</Typography>
    </PortfolioFooter>
  );
};

export default Footer;
