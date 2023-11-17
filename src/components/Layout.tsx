import { Outlet, useLocation } from 'react-router';
import { useState } from 'react';

// @Styles
import {
  PortfolioContainer,
  PortfolioLayout,
  PortfolioBody,
  HomeNavBody,
  PortfolioHomeContainer,
} from './Layout.styles';

import Footer from '../common/components/Footer/Footer';
import Navbar from '../common/components/Navbar/Navbar';
import Home from './Home/Home';
import { ThemeProvider } from '@emotion/react';
import { routes } from '../common/Constants/routes';
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
      <PortfolioLayout>
        <PortfolioContainer>
          <Navbar colorTheme={colorTheme} setColorTheme={setColorTheme} />
          <PortfolioBody>
            <PortfolioHomeContainer isHome={isHome}>
              <Home />
            </PortfolioHomeContainer>

            <HomeNavBody isHome={isHome}>
              {location.pathname !== '/' && <Outlet />}
            </HomeNavBody>
          </PortfolioBody>
          <Footer />
        </PortfolioContainer>
      </PortfolioLayout>
    </ThemeProvider>
  );
};

export default Layout;
