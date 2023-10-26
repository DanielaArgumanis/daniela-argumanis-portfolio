// @Components
import styled from '@emotion/styled';
import Navbar from './common/components/Navbar';

// @Theme
import theme from './common/Theme/Theme';
import { ThemeProvider } from '@emotion/react';

const PortfolioLayout = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`

const PortfolioContainer = styled('div')`
  width: 1600px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioLayout>
        <PortfolioContainer>
          <Navbar/>
        </PortfolioContainer>
      </PortfolioLayout>
    </ThemeProvider>
  );
}

export default App;
