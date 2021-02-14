/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Pokeball from './Pokeball';

const ContainerPokeball = styled.div`
  display: inline-flex;
  /* flex: 0; */
  /* background-color: blue; */
  /* flex-direction: column;     */
`;
const BoxPokemon = (props) => (
  <ContainerPokeball>
    <Pokeball>
      <Pokeball.Center>
        {props.children}
      </Pokeball.Center>
      <Pokeball.Topper />
      <Pokeball.Downer />
    </Pokeball>
  </ContainerPokeball>
);

export default BoxPokemon;
