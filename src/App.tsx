import './App.css';

// @Components
import styled from '@emotion/styled';
import Navbar from './common/components/Navbar/Navbar';

// @Theme
import theme from './common/Theme/Theme';
import { ThemeProvider } from '@emotion/react';
import Home from './components/Home';

const PortfolioLayout = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`

const PortfolioContainer = styled('div')`
  width: 1024px;
  padding: ${props => `0 ${props.theme.spacing(4)}`};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioLayout>
        <PortfolioContainer>
          <Navbar/>
          <Home/>
        </PortfolioContainer>
      </PortfolioLayout>
    </ThemeProvider>
  );
}

export default App;
