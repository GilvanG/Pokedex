/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Pokeball from './Pokeball';

const BoxPokemon = (props) => (
  <Pokeball>
    <Pokeball.Center>
      {props.children}
    </Pokeball.Center>
    <Pokeball.Toppe />
    <Pokeball.Downer />
  </Pokeball>
);

export default BoxPokemon;
