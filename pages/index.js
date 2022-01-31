import React from 'react';
import Head from 'next/head';
import HeaderPokeball from '../src/components/Header';
import FooterPokeball from '../src/components/Footer';
import PokedexProvider from '../src/context/Pokedex';
import Pokedex from '../src/components/Pokedex';

export default function Home() {
  return (
    <PokedexProvider>
      <Head>
        <title>Pokedex</title>
      </Head>
      <HeaderPokeball>
        POKEDEX
      </HeaderPokeball>
      <Pokedex />
      <FooterPokeball>
        Copyright 2021 by Gilvan Gomes. All Rights Reserved.
      </FooterPokeball>
    </PokedexProvider>
  );
}
