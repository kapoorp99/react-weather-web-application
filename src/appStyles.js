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
    >.searchFormComponent {
        border: 1px solid #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        padding: 0.5rem;
        overflow: hidden;
        > input {
            flex: 0.9;
            outline: none;
            border: none;
            height: 2rem;
            padding: 0.5rem;
            width: 100%;
            background: transparent;
            color: #ffffff;
        }
        >button {
            flex: 0.1;
            outline: none;
            border: none;
            height: 2rem;
            padding: 0.5rem;
            width: 100%;
            background: transparent;
            color: #ffffff;
        }
    }
    >.currentWeatherComponent {
        border: 1px solid #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        padding: 1rem;
    }
`;