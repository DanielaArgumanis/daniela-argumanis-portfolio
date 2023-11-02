// @Icons
import sunIcon from '../../../sun-white.svg';

// @Styles
import { PortfolioNavbar, NavbarSection, ThemeButton, NavbarButton } from './Navbar.styles';

const navbarSections = [
  {
    title: "Home",
    order: 0,
    href: '/'
  },
  {
    title: "About me",
    order: 1,
    href: '/about-me'
  },
  {
    title: "Projects",
    order: 2,
    href: '/projects'
  },
  {
    title: "Publications",
    order: 3,
    href: '/publications'
  },
]

const Navbar = () => {

  return <PortfolioNavbar>
    <NavbarSection>
      <ThemeButton src={sunIcon} alt="set-light-theme" />
    </NavbarSection>
    <NavbarSection>
        {navbarSections.map((section) => (
            <NavbarButton order={section.order} to={section.href} >{section.title}
            </NavbarButton>
        ))}
    </NavbarSection>
  </PortfolioNavbar>
}

export default Navbar;
