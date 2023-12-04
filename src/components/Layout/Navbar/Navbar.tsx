// @Components
import Typography from '@commonComponents/Typography/Typography';

// @Constants
import { routes } from '@constants/routes';

// @Icons
import { MoonIcon, SunIcon } from '@icons';

// @Styles
import { PortfolioNavbar, NavbarSection, NavbarLink } from './Navbar.styles';

type NavbarProps = {
  colorMode: 'light' | 'dark';
  handleUpdateColorMode: (colorMode: 'light' | 'dark') => void;
};

const Navbar = ({ colorMode, handleUpdateColorMode }: NavbarProps) => {
  const handleChangeTheme = () => {
    handleUpdateColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <PortfolioNavbar>
      <NavbarSection onClick={handleChangeTheme}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </NavbarSection>
      <NavbarSection>
        {routes.map((section) => (
          <NavbarLink
            key={section.order}
            order={section.order}
            to={section.href}
          >
            <Typography variant="label">{section.title}</Typography>
          </NavbarLink>
        ))}
      </NavbarSection>
    </PortfolioNavbar>
  );
};

export default Navbar;
