import {
  Box, Center, SimpleGrid, Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getPokemons } from '../../api';

type Pokemon = {
  name: string;
};

function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([{ name: 'Loading...' }]);
  const [nextUrl, setNextUrl] = useState('');
  async function getTenPokemons() {
    const res = await getPokemons();
    setPokemons(res.results);
    setNextUrl(res.next);
  }
  useEffect(() => {
    getTenPokemons();
  }, []);

  async function getMorePokemons() {
    const res = await getPokemons(nextUrl);
    const newPokes: Pokemon[] = [...pokemons, ...res.results];
    setPokemons(newPokes);
    setNextUrl(res.next);
  }

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing="15px" m="5">
        {pokemons.map((pokemon: Pokemon, index) => (
          <Box bg="primary" h="md" key={pokemon.name} onClick={() => getMorePokemons()} data-testid={`pokemon-item-${index + 1}`}>{pokemon.name}</Box>
        ))}
      </SimpleGrid>
      <Center>
        <Spinner color="primary" size="xl" />
      </Center>
    </>
  );
}

export default PokemonList;
