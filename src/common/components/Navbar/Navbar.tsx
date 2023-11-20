// @Components
import Typography from '../Typography/Typography';

// @Constants
import { routes } from '../../Constants/routes';

// @Icons
import SunIcon from '../../Icons/SunIcon';
import MoonIcon from '../../Icons/MoonIcon';

// @Styles
import { PortfolioNavbar, NavbarSection, NavbarLink } from './Navbar.styles';

type NavbarProps = {
  colorTheme: 'light' | 'dark';
  setColorTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

const Navbar = ({ colorTheme, setColorTheme }: NavbarProps) => {
  const handleChangeTheme = () => {
    setColorTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <PortfolioNavbar>
      <NavbarSection onClick={handleChangeTheme}>
        {colorTheme === 'light' ? <MoonIcon /> : <SunIcon />}
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
