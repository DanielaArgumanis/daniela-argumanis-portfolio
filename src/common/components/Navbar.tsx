import styled from '@emotion/styled'
import icon from '../../Photo.jpeg';

const PortfolioNavbar = styled('div')`
    background-color: ${props => props.theme.palette.background};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => `${props.theme.spacing(1)} ${props.theme.spacing(18)}`};

    img {
      height: 60px;
      width: 60px;
      border-radius: 100%;
    }

    span {
      color: white;
    }
`

const NavbarSection = styled('div')`
  display: flex;
  align-items: center;
  display: flex;
  gap: ${props => props.theme.spacing(2)};
`

const NavbarButton = styled('button')<{order: number}>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSizes.large};

  :hover {
    color: ${props => props.theme.palette.accents[props.order]};
    border-bottom: ${props => `solid 2px ${props.theme.palette.accents[props.order]}`}
  }
`

const Navbar = () => {
  return <PortfolioNavbar>
    <NavbarSection>
      <img src={icon} className="App-logo" alt="logo" />
    </NavbarSection>
    <NavbarSection>
      <NavbarButton order={1}>PROJECTS</NavbarButton>
      <NavbarButton order={2}>PUBLICATIONS</NavbarButton>
      <NavbarButton order={3}>CONTACT</NavbarButton>
    </NavbarSection>
  </PortfolioNavbar>
}

export default Navbar;
