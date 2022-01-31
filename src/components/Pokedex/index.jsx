import React, { useEffect } from 'react';
import Container from '../Container';
import { usePokedex } from '../../context/Pokedex';
import Loading from '../Loading';
import BoxPokemon from '../BoxPokemon';

const Pokedex = () => {
  const { listPokemon, getDataPokemons } = usePokedex();

  useEffect(() => {
    getDataPokemons();
  }, []);

  return (
    <div>
      {!listPokemon.length === true
        ? (<Loading />)
        : (
          <>
            <Container>
              {listPokemon.map((pokemon, index) => (
                <BoxPokemon
                  index
                  urlPokemon={pokemon.url}
                  namePokemon={pokemon.name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                  key={`${index + 1}-${pokemon.name}`}
                />
              ))}
            </Container>
          </>
        )}
    </div>
  );
};

export default Pokedex;
