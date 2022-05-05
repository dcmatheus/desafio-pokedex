import {
  Box, Center, Image, SimpleGrid, Spinner, Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { getPokemonsWithInfos } from '../../api';
import useIsVisible from '../../hooks/useIsVisible';

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: string[];
};

function PokemonList() {
  const [total, setTotal] = useState<number>(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [url, setUrl] = useState<string>();

  async function getPokemons() {
    const { pokemons: newPokemons, next, count } = await getPokemonsWithInfos(url);
    setPokemons([...pokemons, ...newPokemons]);
    setUrl(next);
    setTotal(count);
  }

  const [ref] = useIsVisible(getPokemons);
  return pokemons.length ? (
    <>
      <SimpleGrid columns={[1, 1, 2]} spacing="15px" m="5">
        { pokemons.map((pokemon: Pokemon, index) => (
          <Box
            bg="primary"
            h="md"
            key={pokemon.name}
            data-testid={`pokemon-item-${index + 1}`}
          >
            <Image src="" />
            <Text>{pokemon.id }</Text>
            <Text>{pokemon.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
      {
        total > pokemons.length && (
          <Center marginBottom="2">
            <Spinner color="primary" size="xl" ref={ref} />
          </Center>
        )
      }
    </>
  ) : (
    <Center h="100vh" bg="secondary" ref={ref}><Spinner color="primary" size="xl" /></Center>
  );
}

export default PokemonList;
