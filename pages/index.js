import React from 'react';
import Head from 'next/head';
import BoxPokemon from '../src/components/BoxPokemon';
import Container from '../src/components/Container';
import Header from '../src/components/Header';

export default function Home() {
  const [Pokemons, setPokemons] = React.useState([]);
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
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
      </Head>
      <Header>
        POKEDEX
      </Header>
      <Container>
        {Pokemons.map((pokemon) => (
          <BoxPokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
            alt={`Pokemon${pokemon.entry_number}`}
          />
        ))}
      </Container>
    </div>
  );
}
