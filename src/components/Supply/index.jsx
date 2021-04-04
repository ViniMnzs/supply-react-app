import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import Station from '../Station';
import { station } from './mock';

import { Container, Field, StationContainer, SupplyContainer, Block, Line } from './styles';

export default function Supply() {

  const [ gasoline, setGasoline ] = useState();
  const [ diesel, setDiesel ] = useState();
  const [ etanol, setEtanol ] = useState();

  const [ stat,setStat ] = useState({});
  const [ aux, setAux ] = useState();

  const [ data, setData ] = useState({})

  const schema = Yup.object().shape({
    liters: Yup.number().min(1, 'O valor não pode ser zero').required('É necessário inserir a quantidade de litros'),
    plate: Yup.string().min(8, 'A placa está incompleta').required('A placa está incompleta'),
    driver: Yup.string().required('É necessário inserir o nome do motorista'),
    distance: Yup.number().min(1, 'O valor não pode ser zero ou negativo').required('É necessário inserir o Km Atual'),
  })

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      liters: 0,
      plate: '',
      driver: '',
      distance: 0,
    },
    validationSchema: schema,
    onSubmit: async (values)=> {
      setData({...data,
        liters: values.liters,
        plate: values.plate,
        driver: values.driver,
        distance: values.distance,
      })
      const create = await api.post(`/create`, data).then(() => alert('Abastecimento registrado com sucesso')).catch(() => alert('Algo errado aconteceu, tente novamente mais tarde!'));
      return create;
    }
  });

  function setValueStation(value){
    setGasoline(value.gasoline)
    setDiesel(value.diesel)
    setEtanol(value.etanol)
    setAux(value.name)
    document.getElementById("view").scrollIntoView();
  }

  useEffect(()=>{
    if(values.liters > 0 && stat.price){
      setData({...data,
        value: (values.liters*stat.price).toFixed(2),
        name: stat.name,
        price: stat.price,
        type: stat.type,
      })
    }
    else setData({...data, value: 0})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[stat.price, values.liters])

  return (
    <Container>
      <StationContainer>
        <h2>Postos</h2>
        {
        station.map(value => (
          <button key={value.id} onClick={()=> setValueStation(value)}>
            <Station value={value} />
          </button>
        ))
        }
      </StationContainer>
      <SupplyContainer>
        <h2>Abastecimento</h2>
        <Line>
          <Block onClick={()=> setStat({name: aux, type: 'G', price: gasoline})}>
            <strong>G</strong>
            <p>gasolina</p>
          </Block>
          <Block onClick={()=> setStat({name: aux, type: 'D', price: diesel})}>
            <strong>D</strong>
            <p>diesel s10</p>
          </Block>
          <Block onClick={()=> setStat({name: aux, type: 'D', price: diesel})}>
            <strong>D</strong>
            <p>diesel s500</p>
          </Block>
          <Block onClick={()=> setStat({name: aux, type: 'E', price: etanol})}>
            <strong>E</strong>
            <p>etanol</p>
          </Block>
        </Line>
        <form id="view" onSubmit={handleSubmit}>
          <Field>
            <label>Litros</label>
            <input 
              type="number"
              name="liters"
              placeholder="Digite o número de litros" 
              onChange={handleChange}
              value={values.liters}
            />
            { errors.liters ? <span>{errors.liters}</span> : null }
          </Field>

          <Field>
            <label>Placa</label>
            <InputMask 
              name="plate"
              placeholder="Digite a placa" 
              onChange={handleChange}
              mask="aaa-9*99"
              value={values.plate}
            />
            { errors.plate ? <span>{errors.plate}</span> : null }
          </Field>

          <Field>
            <label>Valor</label>
            <input
              type="number"
              name="value"
              readOnly
              onChange={handleChange}
              value={data.value}
            />
            { data.value <= 0 ? <span>Escolha um posto, combustível e número de litros</span> : null }
          </Field>

          <Field>
            <label>Motorista</label>
            <input 
              name="driver"
              placeholder="Digite o nome do motorista" 
              onChange={handleChange}
              value={values.driver}
            />
            { errors.driver ? <span>{errors.driver}</span> : null }
          </Field>

          <Field>
            <label>Km Atual</label>
            <input 
              type="number"
              name="distance"
              placeholder="Digite a atual quilometragem" 
              onChange={handleChange}
              value={values.distance}
            />
            { errors.distance ? <span>{errors.distance}</span> : null }
          </Field>

          <Field>
            <button type="submit">
              Enviar
            </button>
          </Field>
        </form>
      </SupplyContainer>
    </Container>
  )
}