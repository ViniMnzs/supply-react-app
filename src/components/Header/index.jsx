import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to='/list'>Histórico</Link>
      <Link to='/'>Novo Abastecimento</Link>
    </Container>
  );
}

export default Header;
