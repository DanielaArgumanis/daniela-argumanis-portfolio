import styled from "@emotion/styled"

const PortfolioHome = styled('div')`
    padding: ${props => `${props.theme.spacing(4)} 0`}; 
    display: flex;
    flex-direction: column;
`
const PortfolioTitle = styled('span')`
    color: ${props => props.theme.palette.white};
    font-size: 32px;
    font-weight: 700;
`
const PortfolioDescription = styled('p')`
    color: ${props => props.theme.palette.white};
    font-size: 18px;
`

const Home = () => {
    return <PortfolioHome>
        <PortfolioTitle>
            Hello! 
        </PortfolioTitle>
        <PortfolioTitle>
            I'm Daniela Argumanis
        </PortfolioTitle>
        <PortfolioTitle>
            Senior Front-End Engineer
        </PortfolioTitle>
        <PortfolioDescription>
        I’m a Senior React Developer based in Peru. I craft user-friendly responsive websites and awesome component libraries.
        </PortfolioDescription>
    </PortfolioHome>
}

export default Home;
