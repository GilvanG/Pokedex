import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Container from '../src/components/Container';
import BoxPokemon from '../src/components/BoxPokemon';
import Loading from '../src/components/Loading';

export default function Home() {
  const [Pokemons, setPokemons] = React.useState([]);
  const [hasCreatedBox, setHasCreatedBox] = React.useState(false);
  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((promissePokemon) => {
        if (promissePokemon.ok) {
          return promissePokemon.json();
        }
        return [];
      })
      .then((PokemonJSON) => {
        setPokemons(PokemonJSON.pokemon_entries);
        setHasCreatedBox(true);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header>
        POKEDEX
      </Header>
      {hasCreatedBox === false
        ? (<Loading />)
        : (
          <Container>
            {Pokemons.map((pokemon) => (
              <BoxPokemon
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                alt={`Pokemon Número ${pokemon.entry_number}`}
              />
            ))}
          </Container>
        )}
      <Footer>
        Copyright 2021 by Gilvan Gomes. All Rights Reserved.
      </Footer>
    </div>
  );
}
