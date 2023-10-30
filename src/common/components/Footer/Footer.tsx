import styled from "@emotion/styled";

const PortfolioFooter = styled('footer')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: ${({ theme }) => `solid 2px ${theme.palette.text}`};
    padding: ${({ theme }) => `${theme.spacing(1)} 0`};
    position: absolute;
    bottom: 0;

    span {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        color: ${({ theme }) => theme.palette.text};
    }
`;

const Footer = () => {
    return <PortfolioFooter>
        <span>© 2023 Daniela Argumanis</span>
        <span>daniela.argumanis@gmail.com</span>
    </PortfolioFooter>
}

export default Footer;
