import './App.css';
import { palette } from './common/Theme/Palette';
import { spacing } from './common/Theme/Units';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import Navbar from './common/components/Navbar';

const theme = {
    palette,
    spacing,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
