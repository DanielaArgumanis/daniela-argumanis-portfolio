// @Constants
import { routes } from '../../Constants/routes';

// @Icons
import sunIcon from '../../../sun-white.svg';

// @Styles
import {
  PortfolioNavbar,
  NavbarSection,
  ThemeButton,
  NavbarButton,
} from './Navbar.styles';

const Navbar = () => {
  return (
    <PortfolioNavbar>
      <NavbarSection>
        <ThemeButton src={sunIcon} alt="set-light-theme" />
      </NavbarSection>
      <NavbarSection>
        {routes.map((section) => (
          <NavbarButton order={section.order} to={section.href}>
            {section.title}
          </NavbarButton>
        ))}
      </NavbarSection>
    </PortfolioNavbar>
  );
};

export default Navbar;
