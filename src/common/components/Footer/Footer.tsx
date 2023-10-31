import styled from "@emotion/styled";
import Typography from "../Typography/Typography";

const PortfolioFooter = styled('footer')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: ${({ theme }) => `solid 2px ${theme.palette.text}`};
    padding: ${({ theme }) => `${theme.spacing(2)} 0`};
    position: sticky;
    background-color: ${({ theme }) => theme.palette.background};
    bottom: 0;
    box-sizing: border-box;
`;

const Footer = () => {
    return <PortfolioFooter>
        <Typography variant="body2">© 2023 Daniela Argumanis</Typography>
        <Typography variant="body2">daniela.argumanis@gmail.com</Typography>
    </PortfolioFooter>
}

export default Footer;
