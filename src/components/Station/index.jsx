import React from 'react';
import { Select, StationIcon } from './styles';

export default function Station({value}) {

  return(
    <Select key={value.id}>
      <StationIcon size={20} />
      <p>{value.name}</p>
      <p>{value.gasoline}</p>
      <p>{value.diesel}</p>
      <p>{value.etanol}</p>
    </Select>
)
}