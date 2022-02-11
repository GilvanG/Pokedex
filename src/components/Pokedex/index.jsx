import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Loading from '../Loading';
import Container from '../Container';
import BoxPokemon from '../BoxPokemon';
import { usePokedex } from '../../context/Pokedex';

const Pokedex = () => {
  const { listPokemon, getDataPokemons, limitsExpandPokedex } = usePokedex();
  const [generation, setGeneration] = useState('');
  useEffect(() => {
    getDataPokemons();
  }, []);

  return (
    <div>
      <Container>
        {limitsExpandPokedex.map((limitGen) => (
          <Button
            onClick={() => setGeneration(limitGen.name) && getDataPokemons(limitGen.name)}
            disabled={generation === limitGen.name}
          >
            {limitGen.name}
          </Button>
        ))}
      </Container>
      {!listPokemon.length === true
        ? (<Loading />)
        : (
          <Container>
            {listPokemon.map((listPokemonGeneration) => (
              <Container>
                { listPokemon.length > 1 ? listPokemonGeneration.name.toUpperCase() : <span />}
                <br />
                {listPokemonGeneration.pokedex.map((pokemon) => (
                  <BoxPokemon
                    index
                    urlPokemon={pokemon.url}
                    namePokemon={pokemon.name}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                    key={`${pokemon.entry_number + 1}-${pokemon.name}`}
                  />
                ))}
              </Container>
            ))}
            { limitsExpandPokedex.length > listPokemon.length && generation !== ''
              ? <Button onClick={() => getDataPokemons()}>Go Next Generation!</Button> : <span />}
          </Container>
        )}
    </div>
  );
};

export default Pokedex;
