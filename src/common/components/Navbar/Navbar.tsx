// @Icons
import sunIcon from '../../../sun-white.svg';

// @Styles
import { PortfolioNavbar, NavbarSection, ThemeButton, NavbarButton } from './Navbar.styles';

const navbarSections = [
  {
    title: "About me",
    order: 0
  },
  {
    title: "Projects",
    order: 1
  },
  {
    title: "Articles",
    order: 2
  },
  {
    title: "Resume",
    order: 3
  },
]

const Navbar = () => {
  return <PortfolioNavbar>
    <NavbarSection>
      <ThemeButton src={sunIcon} alt="set-light-theme" />
    </NavbarSection>
    <NavbarSection>
      {navbarSections.map((section) => (
        <NavbarButton order={section.order}>{section.title}</NavbarButton>
      ))}
    </NavbarSection>
  </PortfolioNavbar>
}

export default Navbar;
