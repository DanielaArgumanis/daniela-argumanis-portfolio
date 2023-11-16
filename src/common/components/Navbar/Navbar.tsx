// @Constants
import { routes } from '../../Constants/routes';

// @Icons
import SunIcon from '../../Icons/SunIcon';

// @Styles
import { PortfolioNavbar, NavbarSection, NavbarButton } from './Navbar.styles';
import MoonIcon from '../../Icons/MoonIcon';
import Typography from '../Typography/Typography';

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
          <NavbarButton order={section.order} to={section.href}>
            <Typography variant="label">{section.title}</Typography>
          </NavbarButton>
        ))}
      </NavbarSection>
    </PortfolioNavbar>
  );
};

export default Navbar;
