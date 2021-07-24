import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(#171717,#141414);
    color: #ffffff;
    letter-spacing: 0.2rem;
    height: 100%;
    padding: 0.5rem;
    >h1 {
        margin: 0.2rem;
        font-size: medium;
    }
    >h2 {
        margin: 0.1rem;
        font-size: small;
    }
`;