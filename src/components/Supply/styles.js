/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const StationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 5rem;

    button{
        height: 40%;
        width: 100%;
        display: flex;
    }
`;

export const SupplyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 5rem;

    .send {
        background-color: #C5C5C5;
        width: 40%;
        height: 50%;
        border-radius: 20px;
        font-weight: bold;
        :hover {
            background-color: #c9c9c9;
            cursor: pointer;
        }
    }

    #view {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 15%;
        width: 100%;
        height: 85%;

        @media screen and (max-width: 600px){
            flex-direction: column;
            align-items: flex-start;
        }
    }

`;

export const Field = styled.div`
    width: 50%;
    height: 15vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 3rem;
    flex-direction: column;

    span {
        color: red;
        font-size: 1.5rem;
        text-align: center;
        padding-top: 10px;
    }

    button { cursor: pointer; }
`;

export const Line = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

export const Block = styled.button`
    width: 10%;
    height: 15vh;
    display: flex;
    background-color: #c9c9c9;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: #c1c1c1;
    }
    border-radius: 10px;
    * {
        background-color: transparent;
    }

    @media screen and (max-width: 600px){
            width: 20%;
        }
`;
