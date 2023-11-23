import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ThemeProvider } from '@emotion/react';

// @Components
import Footer from './Footer/Footer';
import Home from '../Home/Home';
import Navbar from './Navbar/Navbar';

// @Constants
import { routes } from '@constants/routes';

// @Styles
import {
  PortfolioOutletContainer,
  PortfolioBody,
  MainContainer,
  PortfolioHomeContainer,
  MainLayout,
} from '../Layout/Layout.styles';

// @Theme
import getTheme from '@theme/Theme';

const Layout = () => {
  const [colorTheme, setColorTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();
  const locationOrder =
    routes.find((route) => route.href === location.pathname)?.order || 0;
  const theme = getTheme(locationOrder, colorTheme);
  const isHome = location.pathname === '/';

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainContainer>
          <Navbar colorTheme={colorTheme} setColorTheme={setColorTheme} />
          <PortfolioBody>
            <PortfolioHomeContainer isHome={isHome}>
              <Home isHome={isHome} />
            </PortfolioHomeContainer>
            <PortfolioOutletContainer isHome={isHome}>
              {location.pathname !== '/' && <Outlet />}
            </PortfolioOutletContainer>
          </PortfolioBody>
          <Footer />
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
