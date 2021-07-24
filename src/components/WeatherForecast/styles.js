import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 1rem;
    text-align: center;
    >.forecast__heading {
        font-size: x-large;
        margin: 1rem;
        padding: 1rem;
        @media (max-width: 768px) {
            margin: 0.5rem;
            padding: 0.5rem;
        }
    }
    >.forecast__cards {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
            flex-wrap: wrap;
        }
    }
`