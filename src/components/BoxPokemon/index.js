import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Pokeball from './Pokeball';
import { usePokedex } from '../../context/Pokedex';

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

const BoxPokemon = ({
  index, namePokemon, urlPokemon, src, key,
}) => {
  const { setPokemonFocus } = usePokedex();
  return (
    <ContainerPokeball
      onClick={() => setPokemonFocus(namePokemon, urlPokemon)}
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
              alt={`Pokemon Número ${index + 1} - ${namePokemon}`}
              key={key}
              src={src}
              width="180"
            />
          </Img>
        </Pokeball.Center>
        <Pokeball.Topper />
        <Pokeball.Downer />
      </Pokeball>
    </ContainerPokeball>
  );
};

BoxPokemon.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  namePokemon: PropTypes.string.isRequired,
  urlPokemon: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default BoxPokemon;
