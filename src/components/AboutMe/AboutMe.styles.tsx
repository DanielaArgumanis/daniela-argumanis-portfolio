import styled from "@emotion/styled";

export const AboutMeContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 250px;
        padding: ${props => props.theme.spacing(4)};
    }
`
