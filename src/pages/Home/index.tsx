import { Box } from '@chakra-ui/react';
import Header from '../../components/Header';

function Home() {
  return (
    <Box w="5xl" bg="secondary" minH="100vh" border="8px" borderColor="tertiary">
      <Header />
    </Box>
  );
}

export default Home;
