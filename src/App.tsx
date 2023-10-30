import './App.css';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

// @Components
import Navbar from './common/components/Navbar/Navbar';
import Home from './components/Home';
import Footer from './common/components/Footer/Footer';

// @Theme
import theme from './common/Theme/Theme';

const PortfolioLayout = styled('div')`
  display: flex;
  justify-content: center;
  height: 100vh;
`

const PortfolioContainer = styled('div')`
  padding: ${props => `0 ${props.theme.spacing(4)}`};
  width: 1024px;
  position: relative;
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
