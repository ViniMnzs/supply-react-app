import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, ListContainer, Line } from './styles';

export default function List (){
  const [ supply, setSupply ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(()=>{
    api.get('/').then(response =>{
      setSupply(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error.status);
      setLoading(false);
    })
  }, [])

  return(
    <Container>
      <h2>Histórico</h2>
      <ListContainer>
        {
          loading ? <div>Carregando...</div> : (
            supply.length > 0 ? supply.map(value => (
              <Line key={value.id}>
                <div>{`${value.name}`}</div>
                <div>{`${value.driver}`}</div>
                <div>{`${value.plate}`}</div>
                <div>{`${value.type} R$ ${value.price}`}</div>
                <div>{`${value.liters} Litros`}</div>
                <div>{`R$ ${value.value}`}</div>
              </Line>
              ))
              : (
                <div>Nada para mostrar</div>
              )
          )
        }
      </ListContainer>
    </Container>
  )
}