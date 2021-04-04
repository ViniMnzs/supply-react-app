import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 6rem;

  h2 {
    margin-bottom: 5%;
  }
`;

export const ListContainer = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: wrap;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  * {
    background-color: transparent;
    padding: 1%;
    width: 33.33%;
    display: flex;
    justify-content: center;
    text-align: left;
  }
`;