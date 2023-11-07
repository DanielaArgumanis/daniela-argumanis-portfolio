import { Outlet, useLocation } from 'react-router';

// @Styles
import { PortfolioContainer, PortfolioLayout, PortfolioBody, HomeNavBody } from "./Layout.styles";

import Footer from '../common/components/Footer/Footer';
import Navbar from '../common/components/Navbar/Navbar';
import Home from './Home/Home';
import { ThemeProvider } from '@emotion/react';
import { routes } from '../common/Constants/routes';
import getTheme from '../common/Theme/Theme';

const Layout = () => {
  const location = useLocation();
  const locationOrder =
    routes.find((route) => route.href === location.pathname)?.order || 0;
  const theme = getTheme(locationOrder);
  console.log('🚀 ~ theme:', theme);

  return (
    <ThemeProvider theme={theme}>
      <PortfolioLayout>
        <PortfolioContainer>
          <Navbar />
          <PortfolioBody>
            <Home />
            {location.pathname !== '/' && (
              <HomeNavBody>
                <Outlet />
              </HomeNavBody>
            )}
          </PortfolioBody>
          <Footer />
        </PortfolioContainer>
      </PortfolioLayout>
    </ThemeProvider>
  );
};

export default Layout;
