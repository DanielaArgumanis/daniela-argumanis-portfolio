import styled from '@emotion/styled'

const NavbarContainer = styled('div')`
    background-color: ${props => props.theme.palette.background};
    height: 100px;
    width: 100%;
`

const Navbar = () => {
  return <NavbarContainer></NavbarContainer>
}

export default Navbar;
