import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@emotion/react';

// @Components
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
  SplashContainer,
} from '../Layout/Layout.styles';
import 'react-toastify/dist/ReactToastify.css';

// @Theme
import getTheme from '@theme/Theme';
import SVGIcon, { SplashIcon } from '@icons';

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');
  const location = useLocation();
  const locationOrder =
    routes.find((route) => route.href === location.pathname)?.order || 0;
  const theme = getTheme(locationOrder, colorMode);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const mode = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (!!mode) {
      setColorMode(mode);
    }
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  }, []);

  const handleUpdateColorMode = (color: 'light' | 'dark') => {
    localStorage.setItem('theme', color);
    setColorMode(color);
  };

  return (
    <ThemeProvider theme={theme}>
      <SplashContainer showSplash={showSplash}>
        <SVGIcon icon={SplashIcon} />
      </SplashContainer>
      <MainLayout showSplash={showSplash}>
        <ToastContainer />
        <MainContainer>
          <Navbar
            colorMode={colorMode}
            handleUpdateColorMode={handleUpdateColorMode}
          />
          <PortfolioBody>
            <PortfolioHomeContainer isHome={isHome}>
              <Home isHome={isHome} />
            </PortfolioHomeContainer>
            {!isHome && (
              <PortfolioOutletContainer>
                {location.pathname !== '/' && <Outlet />}
              </PortfolioOutletContainer>
            )}
          </PortfolioBody>
        </MainContainer>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Layout;
