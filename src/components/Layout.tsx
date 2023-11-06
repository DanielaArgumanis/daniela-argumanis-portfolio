import { Outlet, useLocation } from 'react-router';

// @Styles
import { PortfolioContainer, PortfolioLayout, PortfolioBody, HomeNavBody } from "./Layout.styles";

import Footer from '../common/components/Footer/Footer';
import Navbar from '../common/components/Navbar/Navbar';
import Home from './Home/Home';

const Layout = () => {

    const location = useLocation();

    return <PortfolioLayout>
        <PortfolioContainer>
            <Navbar />
            <PortfolioBody>
                <Home/>
                {location.pathname !== "/" && <HomeNavBody>
                    <Outlet />
                </HomeNavBody>}
            </PortfolioBody>
            <Footer />
        </PortfolioContainer>
    </PortfolioLayout>
}

export default Layout;
