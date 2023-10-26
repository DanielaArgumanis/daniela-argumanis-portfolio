import './App.css';

// @Components
import Navbar from './common/components/Navbar';

// @Theme
import theme from './common/Theme/Theme';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
