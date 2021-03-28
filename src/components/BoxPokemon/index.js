/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Pokeball from './Pokeball';

const ContainerPokeball = styled.div`
  display: inline-flex;
  padding: 0.5% 1.4vh 0.5% 1.4vh;
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
  <ContainerPokeball
    as={motion.div}
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      delay: 0.5,
      duration: 100,
      type: 'spring',
      stiffness: 200,
      damping: 30,
    }}
  >
    <Pokeball
      as={motion.div}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
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
