import { Box } from '@chakra-ui/react';
import Header from '../../components/Header';
import PokemonList from '../../components/PokemonList';

function Home() {
  return (
    <Box w="2xl" bg="secondary" minH="100vh" border="8px" borderColor="tertiary">
      <Header />
      <PokemonList />
    </Box>
  );
}

export default Home;
