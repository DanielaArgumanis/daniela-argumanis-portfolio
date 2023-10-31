import './App.css';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

// @Components
import Navbar from './common/components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './common/components/Footer/Footer';

// @Theme
import theme from './common/Theme/Theme';

const PortfolioLayout = styled('div')`
  display: flex;
  justify-content: center;
  height: 100vh;
`

const PortfolioContainer = styled('div')`
  max-width: 1024px;
  width: 100%;
  position: relative;
  height: 100%;
  padding: 0 ${props => props.theme.spacing(4)};
  
  ${props => props.theme.breakpoints.down('mobileL')} {
    padding: 0 ${props => props.theme.spacing(2)};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioLayout>
        <PortfolioContainer>
          <Navbar/>
          <Home/>
          <Footer/>
        </PortfolioContainer>
      </PortfolioLayout>
    </ThemeProvider>
  );
}

export default App;
