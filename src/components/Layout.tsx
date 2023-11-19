import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ThemeProvider } from '@emotion/react';

// @Components
import Footer from '../common/components/Footer/Footer';
import Home from './Home/Home';
import Navbar from '../common/components/Navbar/Navbar';

// @Constants
import { routes } from '../common/Constants/routes';

// @Styles
import {
  PortfolioOutletContainer,
  PortfolioBody,
  MainContainer,
  PortfolioHomeContainer,
  MainLayout,
} from './Layout.styles';

// @Theme
import getTheme from '../common/Theme/Theme';

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
              <Home />
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
