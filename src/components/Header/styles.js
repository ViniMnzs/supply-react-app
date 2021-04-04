import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10%;
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

  a {
      background-color: #00C4FE;
      text-align: center;
      font-weight: bold;
      color: #f5f5f5;
      width: 30%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      :hover{
          background-color: #0098FE;
      }

      @media screen and (max-width: 671px){
        height: 40%;
        width: 80%;    
        padding: 1%;    
    }
    }

    @media screen and (max-width: 671px){
        flex-direction: column;
        justify-content: space-between;
        height: 20vh;
        padding-top: 5%;
    }
`;