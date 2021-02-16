/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Pokeball from './Pokeball';

const ContainerPokeball = styled.div`
  display: inline-flex;
  /* text-align: center;
  align-items: center; */
  /* flex: 0; */
  /* background-color: blue; */
  /* flex-direction: column;     */
`;

const Img = styled.div`
  transform: translate(-25%, -15%);
`;
const BoxPokemon = (props) => (
  <ContainerPokeball>
    <Pokeball>
      <Pokeball.Center>
        <Img>
          <img
            src={props.src}
            alt={props.alt}
            width="180"
          />
        </Img>
        {props.children}
      </Pokeball.Center>
      <Pokeball.Topper />
      <Pokeball.Downer />
    </Pokeball>
  </ContainerPokeball>
);

export default BoxPokemon;
